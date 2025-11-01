import { Snackbar, Alert } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeNotification } from '../store/notifications';

export default function NotificationContainer() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notifications.notifications);
  
  // Limit to showing max 4 notifications at once to avoid UI clutter
  const visibleNotifications = notifications.slice(0, 4);

  const handleClose = (id: string) => {
    dispatch(removeNotification(id));
  };

  return (
    <>
      {visibleNotifications.map((notification, index) => (
        <Snackbar
          key={notification.id}
          open={true}
          autoHideDuration={notification.duration ?? null}
          onClose={() => handleClose(notification.id)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ 
            mt: 6 + index * 7, // Stack notifications vertically, accounting for AppBar
            zIndex: (theme) => theme.zIndex.snackbar + index, // Ensure proper stacking
          }}
        >
          <Alert
            onClose={() => handleClose(notification.id)}
            severity={notification.severity}
            variant="filled"
            sx={{ width: '100%', minWidth: 300, maxWidth: 400 }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}

