import { shallow } from 'enzyme';
import getAllNotificationsByUser from './notifications';
import normalized from './notifications';


describe('NotificationItem', () => {
  it('test for the selectCourse action. Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }', () => {
    const expecteds = selectCourse(1);
          expect(expecteds).toEqual("{ type: SELECT_COURSE, index: 1 }");

  });
  it('Calling the creator with 1 as argument should return', () => {
    const expecteds = unSelectCourse(1);
          expect(expecteds).toEqual("{ type: UNSELECT_COURSE, index: 1 }");

  });
});