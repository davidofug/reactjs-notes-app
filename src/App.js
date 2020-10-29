import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PrivateRoute from './components/config/private.route'

import Main from './components/navigation/main'
import Account from './components/navigation/account'

import Home from './components/pages/home'
import ForgotPassword from './components/pages/forgot.password'

import AddUser from './components/pages/add.user'
import Users from './components/pages/users'
import User from './components/pages/user'
import Password from './components/pages/password'

import AddNote from './components/pages/add.note'
import Notes from './components/pages/notes'
import Note from './components/pages/note'

const App = () => {
  return (
    <Router>
        <Main />
        <Account />

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
          
          <Route path="*">
            <div>Not Found</div>
          </Route>

        </Switch>
    </Router>
  )
}

export default App

