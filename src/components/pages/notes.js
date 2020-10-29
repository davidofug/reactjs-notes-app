import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'



function Notes() {
    const [notes, setNotes] = useState([])
  
    let someId = 1
  
    useEffect( () => {
    const ourFetch = () => {
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

        const fetched = ourFetch()
        setNotes(fetched)
  
    },[someId])
  
    return (
      <div>
        <h2>Your notes</h2>
        {notes &&
            notes.map( note => ( !note.archived && (
                <div>
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
    )
  }

export default Notes