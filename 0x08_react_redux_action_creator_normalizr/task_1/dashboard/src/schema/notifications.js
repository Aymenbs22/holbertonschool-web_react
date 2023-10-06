import * as notifications from "../../notifications.json";
import { schema, normalize } from 'normalizr';


getAllNotificationsByUser = (userId) => {
    return notifications = data.filter(notification => notification.authorId === userId)
    .map(notification => notification.context);
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