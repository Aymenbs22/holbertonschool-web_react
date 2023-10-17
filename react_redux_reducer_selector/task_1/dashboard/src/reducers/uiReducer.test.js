import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";
import uiReducer from './uiReducer';

describe('<MyComponent />', () => {
    it('function equals the initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const State = uiReducer(undefined, {});
        expect(State.toJS()).toEqual(initialState.toJS());
      });

      it('function equals the initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const newaction = {
            type: 'SELECT_COURSE'
          };
        const State = uiReducer(initialState, newaction);
        expect(State.toJS()).toEqual(initialState.toJS());
      });

      it('function equals the initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const newaction = {
            type: 'DISPLAY_NOTIFICATION_DRAWER'
          };
        const State = uiReducer(initialState, newaction);
        expect(State.toJS()).toEqual(initialState.toJS());
      });
});