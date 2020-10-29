import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Auth from '../config/auth'

const LoggedIn = () => {

    const {username} = useParams()

    return (
        <div className="nav logged-in">
            <ul>
                <Link to={'users'}>
                    <li>Users</li>
                </Link>
                <Link to={`/${username}`}>
                    <li>Profile</li>
                </Link>
                <Link to={`/password`}>
                    <li>Password</li>
                </Link>
               
                <li onClick={()=> Auth.signout}>Log out</li>
                
            </ul>
        </div>
    )
}

export default LoggedIn