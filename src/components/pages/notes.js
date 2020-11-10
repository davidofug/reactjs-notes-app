import * as React from "react"
import AddNote from './add.note'
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CardGroup } from "react-bootstrap"

const NotesItems = ({notes}) => {

  return (notes.length && (
    <CardColumns>
      <h1></h1>
      { 
        notes.map( note => (
        <Card
          bg='info'
          key={note.id}
          text='white'
          style={{width:'250px'}}
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
        ))}
    </CardColumns>
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