import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const NotificationBanner = () => {
  const { notification, setNotification } = useContext(StudentContext);

  if (!notification) return null;

  const iconMap = {
    success: '🎉',
    warning: '⚠️',
    info: 'ℹ️'
  };

  return (
    <div className={`notification-toast toast-${notification.type}`} role="alert">
      <span className="toast-icon">{iconMap[notification.type] || '🔔'}</span>
      <span className="toast-message">{notification.message}</span>
      <button
        onClick={() => setNotification(null)}
        className="toast-close"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};

export default NotificationBanner;

