import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
      marginBottom: '40px'
}
})
const MyComponent = React.memo(function NotificationItem({type, html, value}){
    return (
        <li className={css(styles.body)} data-notification-type={type}>
            {value}
          <li className={css(styles.body)} dangerouslySetInnerHTML={{ __html: html }} />
          <li className={css(styles.body)} markAsRead={this.markAsRead} onClick="markAsRead()"></li>
        </li>
      );
});

markAsRead: () => {}

Notifications.propTypes = {
  markAsRead: PropTypes.func,
};

NotificationItem.PropTypes = {
  html: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired
}
export default React.memo(MyComponent);