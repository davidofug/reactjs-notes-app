import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Main from './components/navigation/main'
import LoggedIn from './components/navigation/logged.in'
import Home from './components/pages/home'
import Users from './components/pages/users'
import AddNote from './components/pages/add.note'
import Notes from './components/pages/notes'
import NoteItem from './components/pages/note.item'
import PrivateRoute from './components/config/private.route'

const App = () => {
  return (
    <Router>
        <Main />
        <LoggedIn />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new">
            <AddNote />
          </Route>
          <Route path="/notes/:noteid">
            <NoteItem />
          </Route>
          <Route path="/password">
            <div>Change Password</div>
          </Route>
          <PrivateRoute path="/notes" component={Notes} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/users/:id" component={Notes} />

          <Route path="*">
            <div>Not Found</div>
          </Route>
        </Switch>
    </Router>
  )
}

export default App

