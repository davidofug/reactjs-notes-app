import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import MainNav from '../src/components/main.nav'
import Notes from '../src/components/notes'
import NoteItem from '../src/components/note.item'

const App = () => {
  return (
    <Router>
        <MainNav />
        <Switch>
          <Route path="/" exact>
            <Notes />
          </Route>
          <Route path="/new">
            <AddNew />
          </Route>
          <Route path="/notes/:noteid">
            <NoteItem />
          </Route>
          <Route path="/notes/:noteid">
            <NoteItem />
          </Route>
        </Switch>
    </Router>
  )
}

export default App



