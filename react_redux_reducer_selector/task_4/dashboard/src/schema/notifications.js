import * as notifications from "../../notifications.json";
import { schema, normalize } from 'normalizr';


getAllNotificationsByUser = (userId) => {
    const resultnotification = [];
    const notid = normalize(userId);
    for (notid in schema.notifications){
      const notificationss = notification[notid];
      if (notificationss.author === userId) {
        resultnotification.push(notification.context);
    }
  }
}

notificationsNormalizer = (data) => {
  const normalized = normalize(data, notification);
  return normalized;
}

const user = new schema.Entity("users")

const message = new schema.Entity(
  'messages', { 
    idAttribute: 'guid',
  });

const notification = new schema.Entity(
  'notifications', { 
    author: user,
    context: message,
  });

const normalized = normalize(notifications, notification);
export default normalized;