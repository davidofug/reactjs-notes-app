import React from 'react'
import {Redirect } from 'react-router-dom'
import SignIN from '../forms/sign.in'
import SignUP from '../forms/sign.up'
import Auth from '../config/auth'

const Home = () => {
    return (
        <div>
            {
               Auth.getAuth() ? (
                   <Redirect to={{
                        pathname: "/notes"
                    }} />
               ) :(
                    <>
                    <SignIN />
                    <SignUP />
                    </>
               )
            }
        </div>
    )
}

export default Home