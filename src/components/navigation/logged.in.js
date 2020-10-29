import React from 'react'
import {Link, useParams} from 'react-router-dom'

const LoggedIn = () => {

    const {username} = useParams()

    return (
        <div className="nav logged-in">
            <ul>
                <Link to={`/${username}`}>
                    <li>Profile</li>
                </Link>
                <Link to={`/password`}>
                    <li>Password</li>
                </Link>
                <Link to={`/logout`}>
                    <li>Log out</li>
                </Link>
            </ul>
        </div>
    )
}

export default LoggedIn