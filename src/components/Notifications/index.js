import React, { useState, useMemo, useEffect } from 'react';
import { parseISO, formatDistance } from 'date-fns';

import pt from 'date-fns/locale/pt';

import { MdNotifications } from 'react-icons/md';
import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

import api from '~/services/api';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [visible, setVisible] = useState(false);
  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function getNotifications() {
      const response = await api.get('/notifications');

      const data = response.data.map((notification) => ({
        ...notification,
        distanceDate: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    getNotifications();
  }, []);

  function handleOpenNotifications() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`);

    // Atualiza o estado
    setNotifications(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleOpenNotifications}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.distanceDate}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
