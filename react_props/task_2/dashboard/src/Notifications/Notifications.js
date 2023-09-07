import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import NotificationItem from './NotificationItem';

function Notifications() {
    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button aria-label='Close' onClick={buttonclc()} style={btncs}>
          <img src='close-icon'></img>
        </button>
        <ul>
          <NotificationItem type='default' value='New course available'/>
          <NotificationItem type='default' value='New resume available'/>
          <NotificationItem type='high' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}/>
        </ul>
      </div>
    );
  }
  function buttonclc(){
    console.log("Close button has been clicked");
}
const btncs = {
    position: 'fixed',
    float: 'right',
    background: 'transparent',
	  color: 'white',
    top: '10px',
    right: '10px',
    height: '17px'
}
export default Notifications;


  