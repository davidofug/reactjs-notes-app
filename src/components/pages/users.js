import * as React from 'react'
import AddUser from './add.user'

const Viewer = props => {
    return(
        <div>User viewer</div>
    )
}

const Editor = props => {
    return (
        <div>User editor</div>
    )
}

const Users = () => {
    const [users, setUsers] = React.useState([])
    const [toView, setToView] = React.useState(0)
    const [toEdit, setToEdit] = React.useState(0)

    React.useEffect( () => {

        const fakeFetch = () => {
            return [
                {
                    "id" : "444",
                    "username" : "davidofug",
                    "phone" : "256704255401",
                    "name" : "David Wampamba",
                    "password" : "xcvsfffd",
                    "email" : "chat@davidofug.com",
                    "status" : "active",
                    "roles" : ['admin']
                },
                {
                    "id" : "445",
                    "username" : "annet",
                    "phone" : "256705236095",
                    "name" : "Annet Wampamba",
                    "password" : "xcvsfffd",
                    "email" : "annetnanzige@gmail.com",
                    "status" : "active",
                    "roles" : ['subscriber']
                },
                {
                    "id" : "447",
                    "username" : "gertrude",
                    "phone" : "256783550994",
                    "name" : "Gertrude Nakityo",
                    "password" : "xcvsfffd",
                    "email" : "gertrudenakityo@gmail.com",
                    "status" : "active",
                    "roles" : ['subscriber']
                }
            ]
        }

        setUsers(fakeFetch())

     },[])

    const view = id => {
         setToView(id)
    }

    const edit = id => {
         setToEdit(id)
    }
/*    if(toView !== 0)
        return (
            <div>You will view {toView}</div>
        )
    
    if(toEdit !== 0)
        return (
            <div>You will edit {toEdit}</div>
        ) 
*/

    return (
        <div>

            <h1>Users</h1>

            {users ? 
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Action(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map( user => (
                                <tr key={user.id}>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        <a href="#" onClick={() => view(user.id)}>View</a>
                                        <a href="#" onClick={() => edit(user.id)}>Edit</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Username</th>
                                <th>Action(s)</th>
                            </tr>
                        </tfoot>
                    </table> 
                </div> :
                '<h1>Users Not Found</h1>'
            }
            {toEdit !== 0 && (
                <>
                    <Editor id={toEdit}/>
                    <Viewer id={toView}/>
                    <AddUser />
                </>
            )}
        </div>

    )
}

export default Users
