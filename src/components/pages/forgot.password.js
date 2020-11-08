import * as React from 'react'
import {Link} from 'react-router-dom'
import {
    SmallContainer,
    Form,
    TextInput,
    Submit,
    Header,
    Error
} from '../ui/styles'

const ForgotPassword = () => {

    let [error,setError] = React.useState('')
    let [login,setLogin] = React.useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        if(login === '') {
            setError('Provide your login details')
            return
        }

    }

    return (
        <SmallContainer>

            <Header>Reset your password</Header>

            <Form method="post" onSubmit={handleSubmit}>
                {error.length > 0 && <Error>{error}</Error>}
                <TextInput 
                    type="text" 
                    placeholder="Email/Username/Phone"
                    value={login}
                    onChange={ e => setLogin(e.target.value)}
                />
                <p>Remember password? <Link to="/sign-in">Sign in</Link></p>
                <p>Do not have an account? <Link to="/sign-up">Sign up</Link></p>
                <Submit type="submit" value="Reset" />
            </Form>
        </SmallContainer>
    )
}

export default ForgotPassword