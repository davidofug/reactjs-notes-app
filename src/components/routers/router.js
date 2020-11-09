import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MainNav from '../navigation/main'

import PrivateRoute from './private.route'
import SignIN from '../forms/sign.in'
import SignUP from '../forms/sign.up'
import ForgotPassword from '../pages/forgot.password'

import AddUser from '../pages/add.user'
import Users from '../pages/users'
import User from '../pages/user'
import Password from '../pages/password'

import AddNote from '../pages/add.note'
import Notes from '../pages/notes'
import Note from '../pages/note'

import Tasks from '../pages/tasks'

import Logout from '../pages/logout'
import { CustomStyles } from '../ui/styles'
  
const AppRouter = () => {
    return (
    <Router>
        <CustomStyles />
        <Container fluid>
            <MainNav />
        </Container>

        <Container>
            <Row>
                <Col>
                    <Switch>
                        <Route exact strict path="/" >
                            <SignIN />
                        </Route>

                        <Route exact strict path="/sign-in" >
                            <SignIN />
                        </Route>

                        <Route path="/forgot-password">
                            <ForgotPassword />
                        </Route>

                        <Route path="/sign-up">
                            <SignUP />
                        </Route>

                        <PrivateRoute path='/users/:profile' component={User} />
                        <PrivateRoute path="/users/add" component={AddUser} />
                        <PrivateRoute path="/users" component={Users} />
                        <PrivateRoute path="/password" component={Password} />

                        <PrivateRoute path="/notes/:note" component={Note} />
                        <PrivateRoute path="/notes/add" component={AddNote} />
                        <PrivateRoute path="/notes" component={Notes} />

                        <PrivateRoute path="/tasks" component={Tasks} />

                        <PrivateRoute path="/logout" component={Logout} />
                        
                        <Route path="*">
                            <div>Not Found</div>
                        </Route>

                    </Switch>                
                </Col>
            </Row>
        </Container>
    </Router>
    )
}

export default AppRouter