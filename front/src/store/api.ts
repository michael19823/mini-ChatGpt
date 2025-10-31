import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Conversation,
  ConversationWithMessages,
  SendResponse,
} from "../types";

// Create baseQuery instance once for efficiency
const baseQueryInstance = fetchBaseQuery({
  baseUrl: "/api",
  timeout: 12000,
});

// Custom baseQuery that properly handles abort signals BEFORE and DURING the request
const customBaseQuery = async (args: any, api: any, extraOptions: any) => {
  console.log(
    "[RTK QUERY] Step A: customBaseQuery called, checking abort signal"
  );
  console.log("[RTK QUERY] signal.aborted =", args?.signal?.aborted);

  // CRITICAL: Check if signal is already aborted BEFORE making any request
  // This is the key check that prevents the request from reaching the backend
  if (args?.signal?.aborted) {
    console.log(
      "[RTK QUERY] Step B: Signal already aborted - throwing AbortError, fetch will NOT be called"
    );
    const error: any = new Error("Request was aborted");
    error.name = "AbortError";
    throw error;
  }

  console.log("[RTK QUERY] Step C: Signal not aborted - proceeding with fetch");
  console.log("[RTK QUERY] Step C: args keys =", Object.keys(args || {}));
  console.log("[RTK QUERY] Step C: args.signal exists =", !!args?.signal);

  // Ensure signal is explicitly passed to fetch
  // RTK Query's fetchBaseQuery extracts signal from the query result
  const modifiedArgs = {
    ...args,
    // Explicitly ensure signal is present if it exists
    ...(args?.signal && { signal: args.signal }),
  };

  console.log(
    "[RTK QUERY] Step C: modifiedArgs.signal exists =",
    !!modifiedArgs?.signal
  );

  // If signal is provided, wrap in Promise to immediately reject on abort
  if (args?.signal) {
    return new Promise<any>((resolve, reject) => {
      let isAborted = false;

      const abortHandler = () => {
        console.log(
          "[RTK QUERY] ABORT: Signal aborted during fetch - rejecting promise immediately"
        );
        isAborted = true;
        const error: any = new Error("Request was aborted");
        error.name = "AbortError";
        reject(error);
      };

      // Check if already aborted before setting up listener
      if (args.signal.aborted) {
        console.log("[RTK QUERY] ABORT: Signal already aborted before fetch");
        abortHandler();
        return;
      }

      // Set up abort listener BEFORE calling fetchBaseQuery
      args.signal.addEventListener("abort", abortHandler, { once: true });

      console.log(
        "[RTK QUERY] Step D: Added abort listener, calling fetchBaseQuery"
      );
      console.log(
        "[RTK QUERY] Step D: Signal will be passed to fetch - signal.aborted =",
        args.signal.aborted
      );

      // Call fetchBaseQuery but DON'T await it directly
      // If abort happens, we reject immediately and ignore the fetch result
      // NOTE: fetchBaseQuery should automatically extract signal from args and pass to fetch()
      Promise.resolve(baseQueryInstance(modifiedArgs, api, extraOptions))
        .then((result) => {
          // If we already rejected due to abort, ignore this result
          if (isAborted) {
            console.log(
              "[RTK QUERY] Step E: Fetch completed but was already aborted - ignoring result"
            );
            return;
          }

          // Remove listener since we're resolving
          args.signal?.removeEventListener("abort", abortHandler);

          // Final check: if aborted after fetch completed (race condition)
          if (args?.signal?.aborted) {
            console.log(
              "[RTK QUERY] Step E: Fetch completed but signal was aborted - rejecting"
            );
            const error: any = new Error("Request was aborted");
            error.name = "AbortError";
            reject(error);
            return;
          }

          console.log("[RTK QUERY] Step E: Fetch completed successfully");
          resolve(result);
        })
        .catch((err: any) => {
          // If we already rejected due to abort, ignore this error
          if (isAborted) {
            console.log(
              "[RTK QUERY] Step E: Fetch error but was already aborted - ignoring error"
            );
            return;
          }

          // Remove listener since we're rejecting
          args.signal?.removeEventListener("abort", abortHandler);

          // If it's an abort error, use our handler's error
          if (
            err?.name === "AbortError" ||
            err?.name === "CanceledError" ||
            args?.signal?.aborted
          ) {
            console.log(
              "[RTK QUERY] Step E: Fetch aborted - error:",
              err?.name,
              err?.message
            );
            const error: any = new Error("Request was aborted");
            error.name = "AbortError";
            reject(error);
            return;
          }

          console.log(
            "[RTK QUERY] Step E: Fetch failed - error:",
            err?.name,
            err?.message
          );
          reject(err);
        });
    });
  }

  // No signal provided - call normally
  console.log(
    "[RTK QUERY] Step D: No signal provided - calling fetchBaseQuery"
  );
  return baseQueryInstance(modifiedArgs, api, extraOptions);
};

export const api = createApi({
  baseQuery: customBaseQuery,
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
