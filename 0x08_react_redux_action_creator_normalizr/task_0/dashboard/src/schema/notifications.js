import * as notifications from "../../notifications.json";

getAllNotificationsByUser = (userId) => {
    return notifications = data.filter(notification => notification.authorId === userId)
    .map(notification => notification.context);
  }