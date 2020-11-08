import * as React from 'react'

const Tasks = () => {

    const [tasks, setTasks] = React.useState([])
    const [newTask, setNewTask] = React.useState({
        title: '',
        details: ''
    })

    React.useEffect(() => {
        let taskItems = JSON.parse(localStorage.getItem('tasks')) || []
        setTasks(taskItems)
    },[])

    const save = () => {

        const timestamp = Date.now()
        const date = new Date(timestamp)
        const dateFormat = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        
        tasks.push({
            'id': String(timestamp),
            'title': newTask.title,
            'details': newTask.details,
            'date': dateFormat
        })

        localStorage.setItem('tasks', JSON.stringify(tasks))
        setNewTask({
            title:'',
            details: ''
        })
    }

    const complete = e => {
        const {id} = e.target.parentElement
        console.log('Task Completed')
    }

    const remove = e => {
        const {id} = e.target.parentElement
        const title = e.target.parentElement.childNodes[0].innerText

        alert(`Are you sure ${title}`)
    }

    const edit = e => {
        const {id} = e.target.parentElement
        console.log(id)
        alert('You will edit')
    }

    const listItems = tasks.length > 0 && (
        tasks.map( task => 
            (
                <li key={task.id} id={task.id}>
                    <b onClick={complete}>{task.title}</b> <i>{task.date}</i> {" "}
                    <span onClick={remove}>Delete</span>{" "}
                    <span onClick={edit}>Edit</span><br/>
                    <p>{task.details}</p>
                </li>
            )
        )
    )

    return (
        <>
            <header>
                <input type="text" 
                    onChange={e => setNewTask({...newTask,title:e.target.value})}
                    value={newTask.title}
                    placeholder={'Enter item title'}
                /><br/>
                <textarea
                    placeholder="Type the item and click save..." 
                    onChange={e => setNewTask({...newTask,details:e.target.value})}
                    value={newTask.details}
                ></textarea>
                <br/>
                <button onClick={save}>Save</button>
            </header>
            
            <ul>
                {listItems}
            </ul>
        </>
    )
}

export default Tasks
