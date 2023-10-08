import LOGIN from './uiActionTypes';
import LOGOUT from './uiActionTypes';
import DISPLAY_NOTIFICATION_DRAWER from './uiActionTypes';
import HIDE_NOTIFICATION_DRAWER from './uiActionTypes';
import { LOGIN_SUCCESS } from './uiActionTypes';
import { LOGIN_FAILURE } from './uiActionTypes';

export function login(email, password){
    return {
        type: LOGIN,
        user : { email, password } };
}

export const loginbound = (email, password) => {dispatch(login(email, password));}


export function logout(){
    return {
        type: LOGOUT
}
}

export const logoutbound = () => {dispatch(logout());}

export function displayNotificationDrawer(){
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
}
}

export const displayNotificationbound = () => {dispatch(displayNotificationDrawer());}


export function hideNotificationDrawer(){
    return {
        type: HIDE_NOTIFICATION_DRAWER
}
}

export const hideNotificationDrawerbound = () => {dispatch(hideNotificationDrawer());}


export function loginSuccess(){
    return {
        type: LOGIN_SUCCESS
}
}

export function loginFailure(){
    return {
        type: LOGIN_FAILURE
}
}

export function loginRequest(email, password){
    return {
        type: LOGIN_FAILURE
}
}