import * as React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ListUsers = ({addUser, users,remove, edit, userDetails}) => {
    return (
        <>
            <h1>Users</h1>
            {/* <h1>Users <Button variant="dark" onClick={addUser}>Add</Button></h1> */}
            {users.length > 0 &&
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map( user => (
                                <tr key={user.id}>
                                    {/* <td onClick={() => userDetails( user.id )}> */}
                                    <td>
                                        <Link to={`/users/${user.id}`}>
                                            {user.username}
                                        </Link>
                                    </td>
                                    <td>
                                        {user.fullname}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td id={user.id}>
                                        <span onClick={() => remove(user.id)}>
                                            
                                            Delete
                                        </span>
                                        &nbsp;
                                        <span onClick={() => edit(user.id)}>
                                            Edit
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </Table> 
                </div>
            }
        </>
    )

}

const TheForm = ({formTitle, save, user, setUser}) => {
    return (
        <>
            <h1>{formTitle} a user</h1>

            <Form method="post" onSubmit={save}>
                <input 
                    type="hidden"
                    value={user.id} 
                />
                <Form.Group>
                    <Form.Label>Username </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username"
                        onChange={e => setUser({...user, username: e.target.value})}
                        value={user.username}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Full Name"
                        onChange={e => setUser({...user, fullname: e.target.value})}
                        value={user.fullname}
                    />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>E-mail </Form.Label>
                    <Form.Control type="email" 
                        placeholder="E-mail"
                        onChange={e => setUser({...user, email: e.target.value})}
                        value={user.email}
                    />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="phone" 
                        placeholder="Phone"
                        onChange={e => setUser({...user, phone: e.target.value})}
                        value={user.phone}
                    />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" 
                    placeholder="Password"
                    onChange={e => setUser({...user, password: e.target.value})}
                    value={user.password}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password" 
                        placeholder="Confirm Password"
                        onChange={e => setUser({...user, password2: e.target.value})}
                        value={user.password2}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" >Submit</Button>
            </Form>
        </>
    )
}

const UserDetail = ({user,setUser}) => {
    return (
        <div>
            <h1>User profile</h1>
            <p>Name: {user.fullname}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p><button 
                onClick={()=> {
                    user.view = false
                    setUser(user)
                }}>Users</button></p>
        </div>
    )
}

const Users = () => {

    let [users, setUsers] = React.useState([])
    let [formTitle, setTitle] = React.useState('Add')
    
    let [user, setUser] = React.useState({
        id:'',
        username:'',
        fullname: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
        view: false
    })

    const getUsers = () => {
        setUsers(JSON.parse(localStorage.getItem('users')) || [] )
    }

    React.useEffect( () => {
        getUsers()
    },[])

    const addUser = () => {
        setUser({
            id:'',
            username:'',
            fullname: '',
            email: '',
            phone: '',
            password: '',
            password2: ''
        })
        setTitle('Add')

    }

    const handleSubmit = e => {
        e.preventDefault()
        save()
        getUsers()
    }

    const save = () => {

        const index = users.findIndex( auser => auser.id === user.id)

        if(index >= 0) {
            users[index] = user
        } else {
            user.id = Date.now()
            users.push(user)
        }

        localStorage.setItem('users', JSON.stringify(users))
        
        return true
    }

    const userDetails = user_id => {
        const user = users.filter(user => user.id === user_id)[0]
        user.view = true
        setUser(user)
    }

    const edit = user_id => {
        const getUser = users.filter( user => user.id === user_id )
        const update = getUser[0]
        setTitle('Update')
        setUser(update)
    }

    const remove = user_id => {
        const remainingUsers = users.filter( user => user.id !== user_id )
        localStorage.setItem('users', JSON.stringify(remainingUsers))
        getUsers()
    }
    
    if(user.view) 
        return <UserDetail
                user={user}
                setUser={setUser}
            />

    return (
        <Row>
            <Col sm={8}>
                <ListUsers
                    addUser={addUser}
                    users={users}
                    remove={remove}
                    edit={edit}
                    userDetails={userDetails}
                />
            </Col>
            <Col sm={4}>
                <Container>
                    <TheForm
                        formTitle={formTitle}
                        save={handleSubmit}
                        user={user}
                        setUser={setUser} 
                    />
                </Container>
            </Col>
        </Row>
    )
}

export default Users
