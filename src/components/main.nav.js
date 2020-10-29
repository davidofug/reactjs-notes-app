import React from 'react'
import {Link} from 'react-router-dom'

const MainNav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Notes</Link>
                </li>
                <li>
                    <Link to="/new">New</Link>
                </li>
                <li>
                    <Link to="/notes/:noteid">Note</Link>
                </li>
            </ul>
        </div>
    )
}

export default MainNav