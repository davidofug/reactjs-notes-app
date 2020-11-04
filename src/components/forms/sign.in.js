import React from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../config/auth'

const SignIN = () => {
    return (
        <>
            <h1>Sign in </h1>
            <div>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password..." />
                <input type="submit" value="Sign in" onClick={() => {
                    return Auth.authenticate() ? <Redirect to={{pathname: '/notes'}} /> : null
                }}/>
            </div>
        </>
    )
}

export default SignIN