import * as React from 'react'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Tasks = () => {

    const [tasks, setTasks] = React.useState([])
    const [task, setNewTask] = React.useState({
        id: '',
        title: '',
        details: '',
        date: ''
    })

    const [formTitle, setFormTitle] = React.useState('Add New')

    const getTasks = () => {
        setTasks(JSON.parse( localStorage.getItem('tasks') ) || [])
    }

    React.useEffect(() => {
        getTasks()
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        save()
        getTasks()
        setNewTask({
            id:'',
            title: '',
            details: '',
            date:''
        })

    }

    const save = () => {

        const index = tasks.findIndex( atask => atask.id === task.id)
        let newTasks = []
        if(index >= 0) {
            tasks[index] = task
        } else {
            const timestamp = Date.now()
            const date = new Date(timestamp)
            task.id = timestamp
            task.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            newTasks = [...tasks,task]
        }

        localStorage.setItem('tasks', JSON.stringify(newTasks))
        
        return true

  }

    const complete = id => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const task = tasks.filter( atask => String(atask.id) === id)[0]
        let complete = {...task, status: true}
        console.log(complete)
        setNewTask({
            id: complete.id,
            title: complete.title,
            details: complete.details,
            status: complete.status,
            date: complete.date
        })
    }

    const remove = id => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const remaining = tasks.filter( task => String(task.id) !== id )
        setTasks(remaining)
        localStorage.setItem('tasks', JSON.stringify(remaining) )
    }

    const edit = id => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const task = tasks.filter( atask => String(atask.id) === id)[0]

        setFormTitle('Update')

        setNewTask({
            id: task.id,
            title: task.title,
            details: task.details
        })
    }

    const taskItems = tasks.length > 0 && (
        <Accordion defaultActiveKey="0">
            {tasks.map( task => 
                (
                    <Card key={task.id}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={task.id}>
                                {task.title} <i>{task.date}</i>
                            </Accordion.Toggle>
                            <Button onClick={()=>remove(task.id)}>Delete</Button>{" "}
                            <span onClick={() => edit( task.id )}>Edit</span>{' '}
                            <span onClick={() => complete( task.id )}>Finish</span>
                        </Card.Header>
                        <Accordion.Collapse eventKey={task.id}>
                            <Card.Body>{task.details}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            )}
        </Accordion>
    )

    return (
        <>
            <h1>{formTitle} Task</h1>
            <Form method="post" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text" 
                        onChange={e => setNewTask({...task, title:e.target.value})}
                        value={task.title}
                        placeholder={'Task title'}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        placeholder="Describe task" 
                        onChange={e => setNewTask({...task, details:e.target.value})}
                        value={task.details}
                    />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit" >Save</Button>
                </Form.Group>
            </Form>
            
            {taskItems}
            
        </>
    )
}

export default Tasks
