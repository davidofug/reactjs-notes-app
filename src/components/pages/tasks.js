import * as React from 'react'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Tasks = () => {

    let [tasks, setTasks] = React.useState([])
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
        if(index >= 0) {
            tasks[index] = task
        } else {
            const timestamp = Date.now()
            const date = new Date(timestamp)
            task.id = timestamp
            task.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            tasks = [...tasks,task]
        }

        localStorage.setItem('tasks', JSON.stringify(tasks))
        
        return true

    }

    const complete = id => {
        const task = tasks.filter( atask => atask.id === id)[0]
        let completed = {...task, status: true}
        const index = tasks.findIndex( atask => atask.id === completed.id)

        if(index >= 0) {
            tasks[index] = completed
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }

        getTasks()

    }

    const remove = id => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const remaining = tasks.filter( task => task.id !== id )
        setTasks(remaining)
        localStorage.setItem('tasks', JSON.stringify(remaining) )
    }

    const edit = id => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const task = tasks.filter( atask => atask.id === id)[0]
        setFormTitle('Update')

        setNewTask({
            id: task.id,
            title: task.title,
            details: task.details
        })
    }

    const taskItems = tasks.length > 0 && (
        <Accordion defaultActiveKey={tasks[0].id}>
            {tasks.map( task => 
                (
                    <Card key={task.id}>
                        <Card.Header className={task.status === true && 'completed'}>
                            <Accordion.Toggle as={Button} variant="link" eventKey={task.id}>
                                {task.title} <i>{task.date}</i>
                            </Accordion.Toggle>
                            
                            {task.status === true ? null : <Button variant="success" onClick={() => complete( task.id )}>Finish</Button>}
                        </Card.Header>
                        <Accordion.Collapse eventKey={task.id}>
                            <Card.Body>
                                {task.details}
                                <div>
                                <Button variant="danger" onClick={()=>remove(task.id)}>Delete</Button>{" "}
                                {task.status === true ? null : <Button variant="primary" onClick={() => edit( task.id )}>Edit</Button>}
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            )}
        </Accordion>
    )

    return (
        <div className="my-sm-5">
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
                    <Button variant="primary" type="submit">Save</Button>
                </Form.Group>
            </Form>
            <div className="mt-sm-5">{taskItems}</div>
        </div>
    )
}

export default Tasks
