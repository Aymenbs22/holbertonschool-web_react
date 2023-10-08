import { shallow } from 'enzyme';
import getAllNotificationsByUser from './notifications';
import normalized from './notifications';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';
import { setNotificationFilter } from './notificationActionCreators';


describe('NotificationItem', () => {
  it('test for the selectCourse action. Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }', () => {
    const expecteds = markAsAread(1);
          expect(expecteds).toEqual("{type: MARK_AS_READ, index: 1}");

  });
  it('test for the selectCourse action. Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }', () => {
    const expecteds = setNotificationFilter(NotificationTypeFilters);
          expect(expecteds).toEqual("{ type: SET_TYPE_FILTER,filter: 'DEFAULT'}");

  });
});