import * as React from 'react'
import {Redirect} from 'react-router-dom'
import Auth from '../config/auth'

const SignIN = () => {

    const [isAuth, setAuth] = React.useState(0)
    const sign = () => setAuth(Auth.authenticate())

    return isAuth ? <Redirect to={{pathname: "/notes"}} /> : 
        <>
            <h1>Sign in </h1>
            <div>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password..." />
                <input type="submit" value="Sign in" onClick={() => sign()}/>
            </div>
        </>
}

export default SignIN