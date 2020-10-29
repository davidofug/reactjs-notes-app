import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Main from './components/navigation/main'
import LoggedIn from './components/navigation/logged.in'
import Home from './components/pages/home'
import AddNote from './components/pages/add.note'
import Notes from './components/pages/notes'
import NoteItem from './components/pages/note.item'

const App = () => {
  return (
    <Router>
        <Main />
        <LoggedIn />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/notes">
            <Notes />
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
          <Route path="/:username">
            <div>Profile</div>
          </Route>
          <Route path="/users">
            <div></div>
          </Route>
          <Route path="/users/:id" exact>
            <div></div>
          </Route>
          <Route path="*">
            <div>Not Found</div>
          </Route>
        </Switch>
    </Router>
  )
}

export default App



