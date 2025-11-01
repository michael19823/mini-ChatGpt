import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NotificationSeverity = 'error' | 'warning' | 'info' | 'success';

export interface Notification {
  id: string;
  message: string;
  severity: NotificationSeverity;
  duration?: number; // Auto-hide duration in ms, null means manual close
}

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const id = `notification-${Date.now()}-${Math.random()}`;
      state.notifications.push({
        ...action.payload,
        id,
        duration: action.payload.duration ?? 6000, // Default 6 seconds
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, clearAllNotifications } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;

