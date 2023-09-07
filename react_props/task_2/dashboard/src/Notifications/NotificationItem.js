function NotificationItem({type, html, value}){
    return (
        <li data-notification-type={type}>
            {value}
          <li dangerouslySetInnerHTML={{ __html: html }} />
        </li>
      );
};