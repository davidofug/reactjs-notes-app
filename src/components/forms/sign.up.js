import * as React from 'react'
import { Link } from 'react-router-dom'
import {Form, Error, Success, Submit, TextInput, Header} from '../ui/styles'
import Main from '../layouts/main'

const SignUP = () => {

    let [user, setUser] = React.useState({
        id:'',
        fullname: '',
        email: '',
        password: '',
        password2: ''
    })

    let [errors, setErrors] = React.useState('')
    let [success, setSuccess] = React.useState('')

    const handleSubmit = e => {

        e.preventDefault()

        if( user.fullname == '' || user.password == '' || user.password2 == '' ) {
            setErrors( 'Complete all the required fields' )
            return
        }

        if( user.password !== user.password2 ) {
            setErrors( 'Wrong confirm password' )
            return
        }

        user.id = Date.now()

        setErrors('')
 
        save() && setSuccess('Registered successfully')
        
        setUser({
            id:'',
            fullname: '',
            email: '',
            password: '',
            password2: ''
        })
    }

    const save = () => {

        const users = JSON.parse( localStorage.getItem('users') ) || []
        localStorage.setItem('users', JSON.stringify([...users, user]) )
        return true
    }

    return (
        <Main classes="vcenter mx-auto" subclasses="centered-layer border border-dark" >
            <Header>Register</Header>
            <Form method="post" onSubmit={handleSubmit}>
                {errors.length > 0 && <Error>{errors}</Error>}
                {success.length > 0 && <Success>{success}</Success>}

                <TextInput
                    type="text" 
                    placeholder="Full name" 
                    value={user.fullname}
                    onChange={ e => setUser({...user, fullname: e.target.value})}
                />

                <TextInput 
                    type="text" 
                    placeholder="Email"
                    value={user.email}
                    onChange={ e => setUser({...user, email: e.target.value})}
                />

                <TextInput 
                    type="password" 
                    placeholder="Password..."
                    value={user.password}
                    onChange={ e => setUser({...user, password: e.target.value})}
                />
                <TextInput
                    type="password" 
                    placeholder="Confirm password..."
                    value={user.password2}
                    onChange={ e => setUser({...user, password2: e.target.value})}
                />
                <p>Have an account? <Link to="/sign-in">Sign in</Link></p>
                <Submit type="submit" value="Register" />
            </Form>
        </Main>
    )
}

export default SignUP