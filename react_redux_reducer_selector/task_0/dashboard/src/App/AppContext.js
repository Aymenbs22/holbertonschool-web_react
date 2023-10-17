import React from 'react';

const newuser = {
    email: '',
    password: '',
    isLoggedIn: false,
}

const logOut = () => {

}

const userContext = React.createContext({user, logOut});