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
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/notes">Notes</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                    <li>
                        <h4>My Account</h4>
                        <ul>
                            <li>
                                <Link to={`users/${username}`}>Profile</Link>
                            </li>
                            <li>
                                <Link to="/password">Change password</Link>
                            </li>
                            <li>
                                <Link to="/logout">Log out</Link>
                            </li>
                        </ul>
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