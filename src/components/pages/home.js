import React from 'react'
import {Link} from 'react-router-dom'
import Auth from '../auth'
const Home = () => {
    return (
        <div>
            <h1>Log in</h1>
            <div>
                <input type="username" placeholder="Enter username" />
                <input type="password" placeholder="Enter password" />
                <iput type="submit" value="Login" />
                <p><Link to={'/forgot-password'}>Forgot password?</Link></p>
            </div>
            <h1>Register</h1>
            <div>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password..." />
                <input type="password" placeholder="Confirm password..." />
                <input type="submit" value="Register" />
            </div>
        </div>
    )
}

export default Home