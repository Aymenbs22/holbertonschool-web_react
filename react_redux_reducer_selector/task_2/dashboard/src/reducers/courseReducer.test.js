import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";
import uReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS } from "../actions/uiActionTypes";
import { UNSELECT_COURSE } from "../actions/courseActionTypes";
import { SELECT_COURSE } from "../actions/courseActionTypes";

describe('<MyComponent />', () => {
    it('function equals the initial state when no action is passed', () => {
        const initialState = {
        };
        const State = uReducer(undefined, {});
        expect(State.toJS()).toEqual(initialState.toJS());
      });

      it('function equals the initial state when no action is passed', () => {
        const initialState = {
            type: FETCH_COURSE_SUCCESS,
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
        const newaction = {
            type: 'SELECT_COURSE'
          };
        const State = uReducer(initialState, newaction);
        expect(State.toJS()).toEqual(initialState.toJS());
      });

      it('function equals the initial state when no action is passed', () => {
        const initialState = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ];
        const initialState2 = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: true,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ];
        const State = uReducer(initialState, initialState2);
        expect(State.toJS()).toEqual(initialState.toJS());
      });

      it('function equals the initial state when no action is passed', () => {
        const initialState = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ]
        const initialState2 = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ]
        const State = uReducer(initialState, initialState2);
        expect(State.toJS()).toEqual(initialState.toJS());
      });
});