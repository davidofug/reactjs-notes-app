import React from 'react'
import {Redirect } from 'react-router-dom'
import {Wrapper} from '../ui/styles'
import SignIN from '../forms/sign.in'
import SignUP from '../forms/sign.up'
import Auth from '../config/auth'

const Home = () => {
    return (
        <Wrapper>
            {
               Auth.getAuth() ? <Redirect to={{pathname: "/notes"}} /> : (
                    <>
                    <SignIN />
                    <SignUP />
                    </>
               )
            }
        </Wrapper>
    )
}

export default Home