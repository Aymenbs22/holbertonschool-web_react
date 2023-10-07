import { shallow } from 'enzyme';
import getAllNotificationsByUser from './notifications';
import normalized from './notifications';
import LOGIN from './uiActionTypes';
import LOGOUT from './uiActionTypes';
import DISPLAY_NOTIFICATION_DRAWER from './uiActionTypes';
import HIDE_NOTIFICATION_DRAWER from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';


describe('NotificationItem', () => {
    it('Calling the creator with 1 as argument should return', () => {
      const logintest = login("test@test.test", "testtest");
              expect(logintest).toEqual("{ user : { email, password } }");
    
      });
    
    it('Calling the creator with 1 as argument should return', () => {
      const logouttest = logout();
              expect(logouttest).toEqual("{ type: LOGOUT }");
      });

    it('Calling the creator with 1 as argument should return', () => {
      const displayNotificationDrawertest = displayNotificationDrawer();
              expect(displayNotificationDrawertest).toEqual("{type: DISPLAY_NOTIFICATION_DRAWER }");
      });

    it('Calling the creator with 1 as argument should return', () => {
      const hideNotificationDrawertest = hideNotificationDrawer();
              expect(hideNotificationDrawertest).toEqual("{type: HIDE_NOTIFICATION_DRAWER}");
      });
});