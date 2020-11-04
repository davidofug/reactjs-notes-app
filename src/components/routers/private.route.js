import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Auth from '../config/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}>
    {Auth.getAuth() ? <Component {...rest} /> : <Redirect to={{pathname: "/"}}/>}
  </Route>
)

export default PrivateRoute