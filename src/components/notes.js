import React, {useState, useEffect} from "react"

const ourFetch = async () => {
    return [
      {
        "title": "Developing a react app",
        "category": "Study",
        "details": "Study how to use React to create apps",
        "archived" : false
      },
      {
        "title": "Developing a react native app",
        "category": "Work",
        "details": "Swift gas and MobiKlinic apps",
        "archived" : true
      },
      {
        "title": "Writing a manual",
        "category": "Work",
        "details": "write a Manual",
        "archived" : false
      }
    ]
}

function Notes() {
    const [notes, setNotes] = useState([])
  
    let someId = 1
  
    useEffect(() => {

      const fetched = await ourFetch()
      setNotes(fetched)
  
    },[someId])
  
    return (
      <div>
        <h2>Your notes</h2>
        {
            notes.map( note => ( !note.archived && (
                <div>
                    <Link to={`/notes/:noteid`}>
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