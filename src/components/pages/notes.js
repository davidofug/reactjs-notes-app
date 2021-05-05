import * as React from "react"
import AddNote from './add.note'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NotesItems = ({notes}) => {

  return (notes.length && (
    <Container className="my-sm-3">
    <Row>
      <h1></h1>
      { 
        notes.map( note => (
          <Col sm={6}>
        <Card
          bg='info'
          key={note.id}
          text='white'
          >
          <Card.Header>{note.title}</Card.Header>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              {note.body}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">dates</small> */}
            <small>dates</small>
          </Card.Footer>
        </Card>
        </Col>
        ))}
    </Row>
    </Container>
    )
  )
}

const Notes = () => {

  const [notes, setNotes] = React.useState([])

  const add = () => {
    
  }

  const getNotes = async () => {
    const notes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const theNotes = await notes.json()
    setNotes(theNotes.length > 0 ? theNotes : [])
  }

  
  React.useEffect( () => {
    getNotes()

  },[])

  return (
    <Row>
        <Col sm={3}>
          <AddNote />
        </Col>
        <Col sm={9}>
          <NotesItems notes={notes} />
        </Col>
    </Row>
  )
}

export default Notes