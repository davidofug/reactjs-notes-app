import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Notes</Link>
                </li>
                <li>
                    <Link to="/new">New</Link>
                </li>
            </ul>
        </div>
    )
}

export default Main