import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Conversation,
  ConversationWithMessages,
  SendResponse,
} from "../types";

// Track aborted message contents to filter them out persistently
// Key: conversationId, Value: Set of aborted message contents
const abortedMessages = new Map<string, Set<string>>();

// Helper to clean up old aborted messages after a delay
function trackAbortedMessage(conversationId: string, content: string) {
  if (!abortedMessages.has(conversationId)) {
    abortedMessages.set(conversationId, new Set());
  }
  abortedMessages.get(conversationId)!.add(content);

  // Clean up after 30 seconds to avoid memory leaks
  setTimeout(() => {
    const set = abortedMessages.get(conversationId);
    if (set) {
      set.delete(content);
      if (set.size === 0) {
        abortedMessages.delete(conversationId);
      }
    }
  }, 30000);
}

// Export helper to check if a message should be filtered
export function isMessageAborted(
  conversationId: string,
  content: string
): boolean {
  return abortedMessages.get(conversationId)?.has(content) ?? false;
}

// Helper function to extract user-friendly error messages
function getErrorMessage(error: any): string {
  // Handle different error types
  if (typeof error === "string") {
    return error;
  }

  // Network/Fetch errors
  if (error?.status === "FETCH_ERROR") {
    // Distinguish between user-initiated abort and actual timeout/network errors
    if (error?.error?.includes("aborted")) {
      // This will be handled by the component checking abortController.signal.aborted
      // So this shouldn't normally be reached, but just in case
      return "Request was cancelled.";
    }
    if (
      error?.error?.includes("timeout") ||
      error?.error?.includes("timed out")
    ) {
      return "Request timeout. Please try again.";
    }
    return "Network error. Please check your connection.";
  }

  // HTTP errors with response data
  if (error?.data) {
    const data = error.data;

    // Backend error response
    if (typeof data === "object") {
      // Check for validation errors
      if (data.details && Array.isArray(data.details)) {
        const validationMessages = data.details
          .map((d: any) => d.message)
          .join(", ");
        return `Validation error: ${validationMessages}`;
      }

      // Prioritize message field if available (more descriptive)
      if (data.message) {
        return data.message;
      }

      // Fallback to error field
      if (data.error) {
        // Map common error codes to user-friendly messages
        if (data.error === "LLM timeout") {
          return "The AI service is taking too long to respond. Please try again.";
        }
        if (data.error === "LLM failed") {
          return "Failed to get AI response. Please try again.";
        }
        if (data.error === "Not found") {
          return "The requested item was not found.";
        }
        return data.error;
      }
    }

    // String data
    if (typeof data === "string") {
      return data;
    }
  }

  // HTTP status errors
  if (error?.status) {
    switch (error.status) {
      case 400:
        return "Invalid request. Please check your input.";
      case 401:
        return "Unauthorized. Please sign in.";
      case 403:
        return "Access denied.";
      case 404:
        return "Resource not found.";
      case 500:
        return "Server error. Please try again later.";
      case 503:
        return "Service temporarily unavailable. Please try again later.";
      default:
        return `Error ${error.status}. Please try again.`;
    }
  }

  // Generic error message
  if (error?.message) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
}

// Export the error message extractor for use in components
export { getErrorMessage };

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    timeout: 12000,
  }),
  tagTypes: ["Conversation"],
  endpoints: (builder) => ({
    getConversations: builder.query<Conversation[], void>({
      query: () => "/conversations",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Conversation" as const,
                id,
              })),
              { type: "Conversation", id: "LIST" },
            ]
          : [{ type: "Conversation", id: "LIST" }],
    }),

    createConversation: builder.mutation<Conversation, void>({
      query: () => ({
        url: "/conversations",
        method: "POST",
      }),
      invalidatesTags: [{ type: "Conversation", id: "LIST" }],
    }),

    getConversation: builder.query<
      ConversationWithMessages,
      { id: string; cursor?: string; limit?: number }
    >({
      query: ({ id, cursor, limit = 20 }) => ({
        url: `/conversations/${id}/messages`,
        params: { messagesCursor: cursor, limit },
      }),
      providesTags: (result, error, { id }) => [{ type: "Conversation", id }],
    }),

    sendMessage: builder.mutation<
      SendResponse,
      { conversationId: string; content: string; signal?: AbortSignal }
    >({
      query: ({ conversationId, content, signal }) => ({
        url: `/conversations/${conversationId}/messages`,
        method: "POST",
        body: { content },
        signal, // RTK Query's fetchBaseQuery passes this to fetch() - fetch() will throw AbortError if already aborted
      }),
      invalidatesTags: (result, error, { conversationId }) => {
        // Only invalidate if the request succeeded (not on abort/error)
        if (error) {
          // Check if it's an abort error by examining the error structure
          // FetchBaseQueryError might have status 'FETCH_ERROR' for abort errors
          const isAbortError =
            error && typeof error === "object" && "status" in error
              ? error.status === "FETCH_ERROR" ||
                (error as any).error === "AbortError" ||
                (error as any).name === "AbortError"
              : false;

          // Don't invalidate on abort - the optimistic update will be reverted manually
          if (isAbortError) {
            return [];
          }
        }

        // Invalidate on success
        return [
          { type: "Conversation", id: conversationId },
          { type: "Conversation", id: "LIST" },
        ];
      },
      async onQueryStarted(
        { conversationId, content },
        { dispatch, queryFulfilled }
      ) {
        // Store the content and timestamp to identify this message later
        const messageTimestamp = Date.now();
        const messageContent = content;

        // Optimistic update - add user message to conversation
        const conversationPatchResult = dispatch(
          api.util.updateQueryData(
            "getConversation",
            { id: conversationId },
            (draft) => {
              if (!draft || !draft.messages) return;
              const tempId = `temp-${messageTimestamp}`;
              draft.messages.push({
                id: tempId,
                role: "user",
                content: messageContent,
                createdAt: new Date().toISOString(),
              });
            }
          )
        );

        // Optimistic update - update lastMessageAt in conversations list
        const conversationsPatchResult = dispatch(
          api.util.updateQueryData("getConversations", undefined, (draft) => {
            if (!draft || !Array.isArray(draft)) return;
            const conversation = draft.find((c) => c.id === conversationId);
            if (conversation) {
              conversation.lastMessageAt = new Date().toISOString();
            }
          })
        );

        try {
          const { data } = await queryFulfilled;
          // Clear aborted message tracking for this content since it was successfully sent
          // This allows the same message content to be sent again if needed
          const abortedSet = abortedMessages.get(conversationId);
          if (abortedSet) {
            abortedSet.delete(messageContent);
            if (abortedSet.size === 0) {
              abortedMessages.delete(conversationId);
            }
          }

          // Replace optimistic message with real messages
          dispatch(
            api.util.updateQueryData(
              "getConversation",
              { id: conversationId },
              (draft) => {
                if (!draft || !draft.messages) return;
                draft.messages = draft.messages.filter(
                  (m) => !m.id.startsWith("temp-")
                );
                draft.messages.push(data.message, data.reply);
              }
            )
          );
          // Conversations list will be refetched automatically via invalidatesTags
        } catch (err: any) {
          // Always undo optimistic updates on any error (abort, timeout, server error, etc.)
          conversationPatchResult.undo();
          conversationsPatchResult.undo();

          // Track this as an aborted message to filter it out persistently
          trackAbortedMessage(conversationId, messageContent);

          // Manually remove messages matching this content that were added recently
          // This handles both temp messages and real messages created before abort
          dispatch(
            api.util.updateQueryData(
              "getConversation",
              { id: conversationId },
              (draft) => {
                if (!draft || !draft.messages) return;

                const abortedSet = abortedMessages.get(conversationId);

                draft.messages = draft.messages.filter((m) => {
                  // Remove temp messages
                  if (m.id.startsWith("temp-")) return false;

                  // Remove messages with aborted content
                  if (m.role === "user" && abortedSet?.has(m.content)) {
                    return false;
                  }

                  // Also remove user messages with matching content that were created recently
                  // Use a wider time window (10 seconds) to catch messages created before abort
                  if (m.role === "user" && m.content === messageContent) {
                    const messageTime = new Date(m.createdAt).getTime();
                    const timeDiff = messageTime - messageTimestamp;
                    // Remove if created within 10 seconds of our send attempt (before or after)
                    if (Math.abs(timeDiff) < 10000) {
                      return false;
                    }
                  }
                  return true;
                });
              }
            )
          );

          // Invalidate cache - the backend has deleted the message, refetch will happen naturally
          // Don't force refetch immediately to avoid race conditions
          dispatch(
            api.util.invalidateTags([
              { type: "Conversation", id: conversationId },
            ])
          );
        }
      },
    }),

    deleteConversation: builder.mutation<void, string>({
      query: (id) => ({
        url: `/conversations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Conversation", id },
        { type: "Conversation", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useCreateConversationMutation,
  useGetConversationQuery,
  useSendMessageMutation,
  useDeleteConversationMutation,
} = api;
