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
      query: ({ conversationId, content, signal }) => {
        // Check if signal is already aborted before making the request
        // This prevents unnecessary network calls
        if (signal?.aborted) {
          throw new DOMException("Request was aborted", "AbortError");
        }

        return {
          url: `/conversations/${conversationId}/messages`,
          method: "POST",
          body: { content },
          signal, // RTK Query's fetchBaseQuery will pass this to fetch() automatically
        };
      },
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
