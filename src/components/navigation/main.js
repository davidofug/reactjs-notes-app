import React from 'react'
import {Link} from 'react-router-dom'
import Auth from '../config/auth'

const Main = () => {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/" exact>Home</Link>
                </li>
                {Auth.getAuth() && (<>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
                <li>
                    <Link to="/notes/add">Add Note</Link>
                </li>
                </>)}
            </ul>
        </div>
    )
}

export default Main