import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Auth from '../config/auth'

const LoggedIn = () => {

    const {username} = useParams()

    return (<>
        {Auth.getAuth() && (
            <div className="nav logged-in">
                <ul>
                    <li>
                        <Link to={'/users'}>Users</Link>
                    </li>
                    <li>
                        <Link to={`/${username}`}>Profile</Link>
                    </li>
                    <li>
                        <Link to={`/password`}>Password</Link>
                    </li>

                    <li onClick={()=> Auth.signout}>Log out</li>
                    
                </ul>
            </div>
        )
        }
        </>
    )
}

export default LoggedIn