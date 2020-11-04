import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Auth from '../config/auth'

const MainNav = () => {

    const {username} = useParams()

    if( Auth.getAuth() )
        return (
            <div className="nav logged-in">
                <ul>
                    <li>
                        <Link to={'/users'}>Users</Link>
                    </li>
                    <li>
                        <Link to={'/users/add'}>Add User</Link>
                    </li>
                    <li>
                        <Link to={`/${username}`}>Profile</Link>
                    </li>
                    <li>
                        <Link to={`/password`}>Password</Link>
                    </li>
                    <li>
                        <Link to="/notes">Notes</Link>
                    </li>
                    <li>
                        <Link to="/notes/add">Add Note</Link>
                    </li>
                    <li>
                        <Link to={'/logout'}>Log out</Link>
                    </li>
                </ul>
            </div>
        )

    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Sign in/Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default MainNav