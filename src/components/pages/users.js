import * as React from 'react'
import {Link} from 'react-router-dom'

const ListUsers = ({addUser, users,remove, edit, userDetails}) => {
    return (
        <>
            <h1>Users <button onClick={addUser}>Add</button></h1>
            {users.length > 0 &&
                <div>
                    <table>
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
                    </table> 
                </div>
            }
        </>
    )

}

const TheForm = ({formTitle, save, user, setUser}) => {
    return (
        <>
            <div>{formTitle} a user</div>

            <form method="post" onSubmit={save}>
                <input 
                    type="hidden"
                    value={user.id} 
                />
                <label>
                    Username <input type="text" 
                    placeholder="Username"
                    onChange={e => setUser({...user, username: e.target.value})}
                    value={user.username}
                    />
                </label>
                <label>
                    Full Name  <input type="text" 
                    placeholder="Full Name"
                    onChange={e => setUser({...user, fullname: e.target.value})}
                    value={user.fullname}
                    />
                </label>
                <label>
                    E-mail <input type="email" 
                    placeholder="E-mail"
                    onChange={e => setUser({...user, email: e.target.value})}
                    value={user.email}
                    />
                </label>
                <label>
                    Phone <input type="phone" 
                    placeholder="Phone"
                    onChange={e => setUser({...user, phone: e.target.value})}
                    value={user.phone}
                    />
                </label>
                <label>
                    Password <input type="password" 
                    placeholder="Password"
                    onChange={e => setUser({...user, password: e.target.value})}
                    value={user.password}
                    />
                </label>
                <label>
                    Confirm Password <input type="password" 
                    placeholder="Confirm Password"
                    onChange={e => setUser({...user, password2: e.target.value})}
                    value={user.password2}
                    />
                </label>

                <input type="submit" value="Save" />
            </form>
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
    let [formStatus,setStatus] = React.useState(false)
    
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
        setStatus(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        save()
        getUsers()
        setStatus(false)
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

    }

    const userDetails = user_id => {
        const user = users.filter(user => user.id === user_id)[0]
        user.view = true
        setUser(user)
    }

    const edit = user_id => {
        setStatus(true)
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
        <div>
            <ListUsers
                addUser={addUser}
                users={users}
                remove={remove}
                edit={edit}
                userDetails={userDetails}
            />

            {formStatus && <TheForm
                formTitle={formTitle}
                save={handleSubmit}
                user={user}
                setUser={setUser} 
            />}
        </div>
    )
}

export default Users
