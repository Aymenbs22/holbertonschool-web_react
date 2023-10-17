import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";
import uiReducer from './uiReducer';

describe('<MyComponent />', () => {
    it('return the value of the filter', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const filtered = filterTypeSelected(input);
        expect(filtered).toEqual([2, 4, 6, 8]);
    });

    it('function equals the initial state when no action is passed', () => {
        const initialState = {
            data: [
              {
                id: 1,
                name: "ES6",
                credit: 60
              },
              {
                id: 2,
                name: "Webpack",
                credit: 20
              },
              {
                id: 3,
                name: "React",
                credit: 40
              }
            ]
          };
        const State = getNotifications(initialState);
        expect(State).toEqual(              {
            id: 1,
            name: "ES6",
            credit: 60
          },
          {
            id: 2,
            name: "Webpack",
            credit: 20
          },
          {
            id: 3,
            name: "React",
            credit: 40
          });
      });

      it('function equals the initial state when no action is passed', () => {
        const initialState = {
            data: [
              {
                id: 1,
                name: "ES6",
                credit: 60
              },
              {
                id: 2,
                name: "Webpack",
                credit: 20
              },
              {
                id: 3,
                name: "React",
                credit: 40
              }
            ]
          };
        const State = getUnreadNotifications(initialState);
        expect(State).toEqual(              {
            id: 1,
            name: "ES6",
            credit: 60
          },
          {
            id: 2,
            name: "Webpack",
            credit: 20
          },
          {
            id: 3,
            name: "React",
            credit: 40
          });
      });
});