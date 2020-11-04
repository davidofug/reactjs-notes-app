import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import MainNav from '../navigation/main'

import PrivateRoute from './private.route'
import Home from '../pages/home'
import ForgotPassword from '../pages/forgot.password'

import AddUser from '../pages/add.user'
import Users from '../pages/users'
import User from '../pages/user'
import Password from '../pages/password'

import AddNote from '../pages/add.note'
import Notes from '../pages/notes'
import Note from '../pages/note'
import Logout from '../pages/logout'
  
const AppRouter = () => {
    return (
    <Router>

        <MainNav />

        <Switch>

            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/forgot-password">
                <ForgotPassword />
            </Route>

            <PrivateRoute path="/users/add" component={AddUser} />
            <PrivateRoute path="/users" component={Users} />
            <PrivateRoute path="/users/:profile" component={User} />
            <PrivateRoute path="/password" component={Password} />

            <PrivateRoute path="/notes/add" component={AddNote} />
            <PrivateRoute path="/notes" component={Notes} />
            <PrivateRoute path="/notes/:note" component={Note} />
            <PrivateRoute path="/logout" component={Logout} />
            
            <Route path="*">
                <div>Not Found</div>
            </Route>

        </Switch>
    </Router>
    )
}

export default AppRouter