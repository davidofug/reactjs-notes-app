import * as React from 'react'
import {Link, useParams} from 'react-router-dom'

const User = () => {

    let {profile} = useParams() || ''
    let [user, setUser] = React.useState({})

    React.useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        const _user = users.length && users.filter( auser => String(auser.id) === profile )[0]
        setUser(_user)

    },[])

    return (
        <>
            {user && <div>
                <h1>User profile</h1>
                <p><b>Name</b> {user.fullname}</p>
                <p><b>Username</b> {user.username}</p>
                <p><b>Email</b> {user.email}</p>
                <p><b>Phone</b> {user.phone}</p>
                <p>
                    <Link to={'/users'}>
                        Users
                    </Link>
                </p>
            </div>
            }
        </>
    )
}

export default User