import * as React from 'react'

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
        <>
            {errors.length > 0 && errors}
            {success.length > 0 && success}

            <h1>Register</h1>

            <form method="post" onSubmit={handleSubmit}>

                <input
                    type="text" 
                    placeholder="Full name" 
                    value={user.fullname}
                    onChange={ e => setUser({...user, fullname: e.target.value})}
                />

                <input 
                    type="text" 
                    placeholder="Email"
                    value={user.email}
                    onChange={ e => setUser({...user, email: e.target.value})}
                />

                <input 
                    type="password" 
                    placeholder="Password..."
                    value={user.password}
                    onChange={ e => setUser({...user, password: e.target.value})}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password..."
                    value={user.password2}
                    onChange={ e => setUser({...user, password2: e.target.value})}
                />
                <input type="submit" value="Register" />
            </form>
        </>
    )
}

export default SignUP