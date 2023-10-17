import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { LOGIN_SUCCESS } from "../actions/uiActionTypes";
import { LOGIN_FAILURE } from "../actions/uiActionTypes";
import { LOGOUT } from "../actions/uiActionTypes";
import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { MARK_AS_READ } from "../actions/notificationActionTypes";

const initialState = Map({
    notifications: [],
    filter: 'DEFAULT',
})

export default function uReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            return state.map(todo => {
                if (todo.id === action.payload) {
                  return{
                    ...todo,
                    isRead: false
                  } 
                }      
                return {
                  ...todo,
                }
              })
            }
        case MARK_AS_READ: {
            return state.map(todo => {
                if (todo.id === action.payload) {
                  return{
                    ...todo,
                    isRead: true
                  } 
                }      
                return {
                  ...todo,
                }
              })
            }
        case SET_TYPE_FILTER:
        return {
            ...todo,
            filter: action.filter
        };
        default:
            return state;
    }
}