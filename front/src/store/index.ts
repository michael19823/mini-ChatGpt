import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import notificationsReducer from './notifications';

// -------------------------------------------------
// 1. Create the store (only one declaration!)
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

// -------------------------------------------------
// 2. Type exports (required for hooks)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// -------------------------------------------------
// 3. **DO NOT re-export `store` here** – it is already exported above.
//     Remove any line like: `export { store };` or `import store`
// -------------------------------------------------