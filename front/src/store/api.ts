import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  Conversation,
  ConversationWithMessages,
  SendResponse,
} from '../types';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    timeout: 12000,
  }),
  tagTypes: ['Conversation'],
  endpoints: (builder) => ({
    getConversations: builder.query<Conversation[], void>({
      query: () => '/conversations',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Conversation' as const, id })),
              { type: 'Conversation', id: 'LIST' },
            ]
          : [{ type: 'Conversation', id: 'LIST' }],
    }),

    createConversation: builder.mutation<Conversation, void>({
      query: () => ({
        url: '/conversations',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Conversation', id: 'LIST' }],
    }),

    getConversation: builder.query<
      ConversationWithMessages,
      { id: string; cursor?: string; limit?: number }
    >({
      query: ({ id, cursor, limit = 20 }) => ({
        url: `/conversations/${id}`,
        params: { messagesCursor: cursor, limit },
      }),
      providesTags: (result, error, { id }) => [{ type: 'Conversation', id }],
    }),

    sendMessage: builder.mutation<
      SendResponse,
      { conversationId: string; content: string }
    >({
      query: ({ conversationId, content }) => ({
        url: `/conversations/${conversationId}/messages`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: (result, error, { conversationId }) => [
        { type: 'Conversation', id: conversationId },
        { type: 'Conversation', id: 'LIST' },
      ],
      async onQueryStarted(
        { conversationId, content },
        { dispatch, queryFulfilled }
      ) {
        // Create abort controller
        const controller = new AbortController();
        const signal = controller.signal;

        // Optimistic update
        const patchResult = dispatch(
          api.util.updateQueryData(
            'getConversation',
            { id: conversationId },
            (draft) => {
              const tempId = `temp-${Date.now()}`;
              draft.messages.push({
                id: tempId,
                role: 'user',
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
              'getConversation',
              { id: conversationId },
              (draft) => {
                draft.messages = draft.messages.filter((m) => !m.id.startsWith('temp-'));
                draft.messages.push(data.message, data.reply);
              }
            )
          );
        } catch (err: any) {
          if (err.name === 'AbortError') {
            console.log('Send cancelled');
          }
          patchResult.undo();
        }

        // Store controller globally so frontend can access it
        (global as any).abortController = controller;
      },
    }),

    deleteConversation: builder.mutation<void, string>({
      query: (id) => ({
        url: `/conversations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Conversation', id },
        { type: 'Conversation', id: 'LIST' },
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