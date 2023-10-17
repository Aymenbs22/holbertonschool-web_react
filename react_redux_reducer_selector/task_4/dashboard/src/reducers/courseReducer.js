import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { LOGIN_SUCCESS } from "../actions/uiActionTypes";
import { LOGIN_FAILURE } from "../actions/uiActionTypes";
import { LOGOUT } from "../actions/uiActionTypes";
import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS } from "../actions/uiActionTypes";
import { UNSELECT_COURSE } from "../actions/courseActionTypes";
import { SELECT_COURSE } from "../actions/courseActionTypes";

const initialState = Map({
});

export default function uReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            return state.set('isSelected', false);
          }
        case SELECT_COURSE: {
            return state.map(todo => {
                if (todo.id === action.payload) {
                  return{
                    todo,
                    isSelected: false
                  } 
                }      
                return {
                  ...todo,
                }
              })
            }
        case UNSELECT_COURSE: {
            return state.map(todo => {
                if (todo.id === action.payload) {
                  return{
                    todo,
                    isSelected: false
                  } 
                }      
                return {
                  ...todo,
                }
              })
            }
        default:
            return state;
    }
}