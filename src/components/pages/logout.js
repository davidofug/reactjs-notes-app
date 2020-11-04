import * as React from 'react'
import Auth from '../config/auth'
import Home from './home'
const Logout = () => {

    React.useEffect(() => {
        Auth.signout()
    },[])

    return <Home/>
}

export default Logout