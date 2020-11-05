import * as React from "react"
import {Link} from 'react-router-dom'
import AddNote from './add.note'

const Notes = () => {

  const [notes, setNotes] = React.useState([])
  
  React.useEffect( () => {
    const fakeFetch = () => {
      return [
        {
          "id" : "445sffa",
          "title": "Developing a react app",
          "category": "Study",
          "details": "Study how to use React to create apps",
          "archived" : false
        },
        {
          "id" : "425sfda",
          "title": "Developing a react native app",
          "category": "Work",
          "details": "Swift gas and MobiKlinic apps",
          "archived" : true
        },
        {
          "id" : "345sfga",
          "title": "Writing a manual",
          "category": "Work",
          "details": "write a Manual",
          "archived" : false
        }
      ]
    }

    setNotes(fakeFetch)

  },[])

  return (
    <div>
      <h2>Your notes</h2>
      <div>
        {notes &&
            notes.map( note => ( !note.archived && (
                <div key={note.id}>
                    <Link to={`/notes/${note.id}`}>
                        <h1>{note.title}</h1>
                    </Link>
                    <p>{note.details}</p>
                </div>
                )
                ) 
            )
        }
      </div>
      <div>
        <AddNote />
      </div>

    </div>
  )
}

export default Notes