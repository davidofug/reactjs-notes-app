import * as React from 'react'
import {Link,Redirect} from 'react-router-dom'
import Auth from '../config/auth'
import {Form, Error, Header, SmallContainer, Submit, TextInput}  from '../ui/styles'

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
        <SmallContainer>
            <Header>Sign in</Header>
            <Form>
                {error && <Error>{error}</Error>}
                <TextInput
                    type="text"
                    placeholder="Email/Username/Phone" 
                    onChange={ e => setCreds({...creds, username: e.target.value })}
                    value={creds.username}
                />

                <TextInput
                    type="password"
                    placeholder="Password..."
                    value={creds.password}
                    onChange={ e => setCreds({...creds, password: e.target.value})}
                />
                <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
                <p><Link to={'/forgot-password'}>Forgot Password?</Link></p>

                <Submit type="submit" value="Sign in" onClick={sign}/>
            </Form>
        </SmallContainer>
}

export default SignIN