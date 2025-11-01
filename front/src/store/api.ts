import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Conversation,
  ConversationWithMessages,
  SendResponse,
} from "../types";

// Create baseQuery instance once for efficiency
// Note: timeout is also set in modifiedArgs to ensure it applies to all queries
const baseQueryInstance = fetchBaseQuery({
  baseUrl: "/api",
  timeout: 12000,
});

// Custom baseQuery that properly handles abort signals BEFORE and DURING the request
const customBaseQuery = async (args: any, api: any, extraOptions: any) => {
  // RTK Query can pass args as:
  // - A string (URL): "/conversations"
  // - An object: { url: "/conversations", method: "GET", ... }
  // - undefined/null (should not happen, but handle gracefully)

  // Normalize to object format for consistent handling
  let normalizedArgs: any;
  if (typeof args === "string") {
    normalizedArgs = { url: args };
  } else if (args && typeof args === "object") {
    normalizedArgs = args;
  } else {
    // Fallback: log error and try to proceed
    console.error("[RTK QUERY] Unexpected args format:", args);
    normalizedArgs = { url: args || "" };
  }

  // CRITICAL: Check if signal is already aborted BEFORE making any request
  if (normalizedArgs?.signal?.aborted) {
    const error: any = new Error("Request was aborted");
    error.name = "AbortError";
    throw error;
  }

  // Ensure we have a URL - if not, this is an invalid request
  if (!normalizedArgs.url) {
    console.error("[RTK QUERY] Missing URL in args:", args);
    return {
      error: {
        status: "CUSTOM_ERROR",
        data: "Invalid request: missing URL",
      },
    };
  }

  // Always clone args and add timeout - ensures modifiedArgs is available for ALL queries
  const modifiedArgs = {
    ...normalizedArgs,
    timeout: 12000, // Apply 12s timeout to all queries
  };

  // If signal is provided, wrap in Promise to handle abort during fetch
  if (modifiedArgs?.signal) {
    return new Promise<any>((resolve, reject) => {
      let isAborted = false;

      const abortHandler = () => {
        isAborted = true;
        modifiedArgs.signal?.removeEventListener("abort", abortHandler);
        const error: any = new Error("Request was aborted");
        error.name = "AbortError";
        reject(error);
      };

      // Check if already aborted before setting up listener
      if (modifiedArgs.signal.aborted) {
        abortHandler();
        return;
      }

      // Set up abort listener BEFORE calling fetchBaseQuery
      modifiedArgs.signal.addEventListener("abort", abortHandler, {
        once: true,
      });

      // Call fetchBaseQuery and handle abort during/after fetch
      Promise.resolve(baseQueryInstance(modifiedArgs, api, extraOptions))
        .then((result) => {
          modifiedArgs.signal?.removeEventListener("abort", abortHandler);

          // If we already rejected due to abort, ignore this result
          if (isAborted || modifiedArgs?.signal?.aborted) {
            const error: any = new Error("Request was aborted");
            error.name = "AbortError";
            reject(error);
            return;
          }

          resolve(result);
        })
        .catch((err: any) => {
          modifiedArgs.signal?.removeEventListener("abort", abortHandler);

          // If we already rejected due to abort, ignore this error
          if (isAborted || modifiedArgs?.signal?.aborted) {
            const error: any = new Error("Request was aborted");
            error.name = "AbortError";
            reject(error);
            return;
          }

          // If it's an abort error, use our handler's error
          if (err?.name === "AbortError" || err?.name === "CanceledError") {
            const error: any = new Error("Request was aborted");
            error.name = "AbortError";
            reject(error);
            return;
          }

          reject(err);
        });
    });
  }

  // Normal case (no signal): use modifiedArgs - FIXED: now modifiedArgs is defined
  const result = await baseQueryInstance(modifiedArgs, api, extraOptions);

  // Log unexpected 204 responses for debugging (transformResponse will handle it)
  if (
    (result as any).meta?.response?.status === 204 &&
    modifiedArgs?.method !== "DELETE"
  ) {
    console.warn(
      "[RTK QUERY] Received 204 for non-DELETE request:",
      modifiedArgs?.url,
      "- transformResponse will convert to empty array"
    );
  }

  return result;
};

export const api = createApi({
  baseQuery: customBaseQuery,
  tagTypes: ["Conversation"],
  endpoints: (builder) => ({
    getConversations: builder.query<Conversation[], void>({
      query: () => "/conversations",
      transformResponse: (response: any, meta: any) => {
        // Handle 204 No Content - this shouldn't happen for GET requests
        // If it does, it might be a cached DELETE response or routing issue
        if (meta?.response?.status === 204) {
          console.warn(
            "[RTK QUERY] getConversations: Received 204, this is unexpected for GET request"
          );
          // Return empty array but log for debugging
          return [];
        }
        // Ensure we always return an array, never null
        if (Array.isArray(response)) {
          return response;
        }
        if (response === null || response === undefined) {
          return [];
        }
        // Fallback for unexpected format
        return [];
      },
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
        url: `/conversations/${id}`,
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
        signal, // Pass abort signal to fetch
      }),
      invalidatesTags: (result, error, { conversationId }) => [
        { type: "Conversation", id: conversationId },
        { type: "Conversation", id: "LIST" },
      ],
      async onQueryStarted(
        { conversationId, content },
        { dispatch, queryFulfilled }
      ) {
        // Optimistic update
        const patchResult = dispatch(
          api.util.updateQueryData(
            "getConversation",
            { id: conversationId },
            (draft) => {
              const tempId = `temp-${Date.now()}`;
              draft.messages.push({
                id: tempId,
                role: "user",
                content,
                createdAt: new Date().toISOString(),
              });
            }
          )
        );

        try {
          const { data } = await queryFulfilled;
          dispatch(
            api.util.updateQueryData(
              "getConversation",
              { id: conversationId },
              (draft) => {
                draft.messages = draft.messages.filter(
                  (m) => !m.id.startsWith("temp-")
                );
                draft.messages.push(data.message, data.reply);
              }
            )
          );
        } catch (err: any) {
          patchResult.undo();
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

// Note: Cancellation/abort handling has been removed for now
