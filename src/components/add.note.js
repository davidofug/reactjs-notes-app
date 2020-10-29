
import React, {useState} from 'react'

const AddNote = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  
  return (
    <div>
      <h2>Create a note</h2>
      <form action="api/notes" method="post">
        <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea value={details} onChange={e => setDetails(e.target.value)} placeholder="Details"></textarea>
        <input type="submit" value="Publish" />
      </form>
    </div>
  )
}

export default AddNote