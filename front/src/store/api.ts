import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import type {
  Conversation,
  ConversationWithMessages,
  SendResponse,
} from '../types';

// --- 1. Raw base query ---
const rawBaseQuery = fetchBaseQuery({
  baseUrl: '/api',
  timeout: 12000,
});

// --- 2. Custom baseQuery with nice error strings ---
const baseQueryWithError = async (
  args: string | { url: string; method?: string; body?: any },
  api: any,
  extraOptions: {}
) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status, data } = result.error as FetchBaseQueryError;
    let message = 'Unknown error';

    if (status === 'FETCH_ERROR') {
      message = 'No backend server running (expected in dev)';
    } else if (status === 404) {
      message = 'API endpoint not found (backend not started)';
    } else if (data && typeof data === 'object') {
      message = (data as any).error || JSON.stringify(data);
    } else if (typeof data === 'string') {
      message = data;
    } else {
      message = `HTTP ${status}`;
    }

    return {
      error: {
        status,
        data: message,
      },
    };
  }

  return result;
};

// --- 3. Create API with typed baseQuery ---
export const api = createApi({
  baseQuery: baseQueryWithError,
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
        } catch {
          patchResult.undo();
        }
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