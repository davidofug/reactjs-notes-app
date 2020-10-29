import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Main from './components/navigation/main'
import LoggedIn from './components/navigation/logged.in'

import Home from './components/pages/home'
import SignUP from './components/pages/sign.up'
import ForgotPassword from './components/pages/forgot.password'
import PrivateRoute from './components/config/private.route'

import AddUser from './components/pages/add.user'
import Users from './components/pages/users'
import User from './components/pages/user'
import Password from './components/pages/password'

import AddNote from './components/pages/add.note'
import Notes from './components/pages/notes'
import NoteItem from './components/pages/note.item'

const App = () => {
  return (
    <Router>
        <Main />
        <LoggedIn />
        <Switch>
          <Route path="*">
            <div>Not Found</div>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUP />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>

          <PrivateRoute path="/add/note" component={AddNote} />
          <PrivateRoute path="/notes" component={Notes} />
          <PrivateRoute path="/add/user" component={AddUser} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/users/:id" component={User} />
          <PrivateRoute path="/password" component={Password} />
          <PrivateRoute path="/notes/:noteid" component={NoteItem} />

        </Switch>
    </Router>
  )
}

export default App

