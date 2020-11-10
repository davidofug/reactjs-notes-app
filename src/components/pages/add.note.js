
import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddNote = () => {

  const [note, setNote] = useState({
    id: '',
    title: '',
    details: '',
    status: '',
    user: '',
    date: {
      createdAt: '',
      updatedAt: '',
      updatedBy: ''
    }
  })
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(note)
  }

  return (
    <>
      <h2>Create a note</h2>
      <Form onSubmit={handleSubmit} action="api/notes" method="post">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={note.title}
            type="text"
            placeholder="Title"
            onChange={ e => setNote({...note, title: e.target.value})}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            value={note.details}
            onChange={e => setNote({...note, details: e.target.value})}
            placeholder="Details" 
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        > Publish </Button>
      </Form>
    </>
  )
}

export default AddNote