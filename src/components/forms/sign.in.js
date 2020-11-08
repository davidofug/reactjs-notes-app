import * as React from 'react'
import {Link,Redirect} from 'react-router-dom'
import Auth from '../config/auth'

const SignIN = () => {

    let [isAuth, setAuth] = React.useState(0)
    let [error, setError] = React.useState('')
    let [creds, setCreds] = React.useState({
        username:'',
        password: ''
    })

    const sign = () => {

        if(creds.username == '' || creds.password == '')
            return setError('All fields are required!')

        let {username, password} = creds
        let _isAuth = Auth.authenticate(username, password)

        return _isAuth ? setAuth(_isAuth) : setError('Wrong username/password')
    }

    return isAuth == 1 ? <Redirect to={{pathname: "/notes"}} /> : 
        <>
            <h1>Sign in </h1>
            {error && <p>{error}</p>}
            <div>
                <input
                    type="text"
                    placeholder="Email" 
                    onChange={ e => setCreds({...creds, username: e.target.value })}
                    value={creds.username}
                />

                <input
                    type="password"
                    placeholder="Password..."
                    value={creds.password}
                    onChange={ e => setCreds({...creds, password: e.target.value})}
                />
                <input type="submit" value="Sign in" onClick={sign}/>
                <p><Link to={'/forgot-password'}>Forgot Password?</Link></p>
            </div>
        </>
}

export default SignIN