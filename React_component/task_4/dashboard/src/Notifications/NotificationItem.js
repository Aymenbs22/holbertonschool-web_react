import PropTypes from 'prop-types';
function NotificationItem({type, html, value}){
    return (
        <li data-notification-type={type}>
            {value}
          <li dangerouslySetInnerHTML={{ __html: html }} />
          <li markAsRead={this.markAsRead} onClick="markAsRead()"></li>
        </li>
      );
};

markAsRead: () => {}

Notifications.propTypes = {
  markAsRead: PropTypes.func,
};

NotificationItem.PropTypes = {
  html: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired
}