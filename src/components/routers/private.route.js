import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Auth from '../config/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => 
    Auth.getAuth() ? (<Component {...props} />) 
    : (<Redirect to={{pathname: "/"}}/>)} 
  />
) 

export default PrivateRoute