import React from 'react'

const SignUP = () => {
    return (
        <>
            <h1>Register</h1>
            <div>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password..." />
                <input type="password" placeholder="Confirm password..." />
                <input type="submit" value="Register" />
            </div>
        </>
    )
}

export default SignUP