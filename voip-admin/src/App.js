import './App.css';
import * as React from "react";
import { Admin, Resource, ListGuesser,fetchUtils } from 'react-admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserList, UserEdit, UserCreate } from './user';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';
import MyLoginPage from "./MyLoginPage"
import MyLogoutButton from './MyLogoutButton';

/*const authProvider = {
    // authentication
    login: params => Promise.resolve(),
    checkError: error => Promise.resolve(),
    checkAuth: params => Promise.resolve(),
    logout: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),
};*/

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    //const token = localStorage.getItem('token');
    //console.log("tokennnnnnnnn:", token)
    /*options.headers.set('token', `ravikanth`);*/
    options.headers.set('Authorization', `ravi1`);
    options.headers.set('X-Custom-Header', 'foobar');
    console.log("url:",url)
    return fetchUtils.fetchJson(url, options);
}

//const dataProvider = jsonServerProvider('http://localhost:8080');
const dataProvider = //simpleRestProvider("http://108.60.134.228:8080", fetchJson);
  simpleRestProvider("http://localhost:8080", fetchJson);
function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider} >
        <Resource name="contacts" list={UserList} edit={UserEdit} create={UserCreate}/>
    </Admin>
    );
}

export default App
