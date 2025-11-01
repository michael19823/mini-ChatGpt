import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Conversation,
  ConversationWithMessages,
  SendResponse,
} from "../types";

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
        // Optimistic update - add user message to conversation
        const conversationPatchResult = dispatch(
          api.util.updateQueryData(
            "getConversation",
            { id: conversationId },
            (draft) => {
              if (!draft || !draft.messages) return;
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
          // Check if this is an abort error
          const isAbortError =
            err?.name === "AbortError" ||
            err?.name === "CanceledError" ||
            err?.message === "Request was aborted" ||
            (err instanceof DOMException && err.name === "AbortError");

          // Always undo optimistic updates on error (including abort)
          conversationPatchResult.undo();

          // For abort errors, also undo the conversations list update
          // For other errors, keep it (the message was sent but failed to get response)
          if (isAbortError) {
            conversationsPatchResult.undo();
          }
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
