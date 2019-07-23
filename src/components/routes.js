import React, { Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom'
import { connect } from 'react-redux' 
import { saveAuthedUser } from '../actions/authedUser'
import Login from './login2'
import PrivateRoute from './PrivateRoute';
import Protected from './Protected'
import AuthButton from './authButton'
import Home from './Home'
import QuestionDetails from './QuestionDetalis'
import leaderBoard from './leaderBoard'
import addQuestion from './addQuestion'
import NotFound from './NotFound'
import MenuNav from './MenuNav'
import MissingQuestion from "./MissingQuestion";

const Public = () => <h3>Public</h3>

const Protected2 = () => <h3>Protected2</h3>

class Routes extends Component {
render(){
const {authedUser} = this.props
    return (
        <Router>
            <div>
                <MenuNav/>
                <Switch>
                    <Route path="/login" component={Login} authed={authedUser} />
                    <PrivateRoute path='/home' component={Home} authed={authedUser} />
                    <PrivateRoute path='/protected' component={Protected} authed={authedUser} />
                    <PrivateRoute path='/protected2' component={Protected2} authed={authedUser} />
                    <PrivateRoute path="/questions/:id" component={QuestionDetails} authed={authedUser} />
                    <PrivateRoute path='/leaderboard' component={leaderBoard} authed={authedUser} />
                    <PrivateRoute path='/add' component={addQuestion} authed={authedUser} />
                    <Route path='/missingQuestion' component={MissingQuestion}  />

                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    )
}
}
function mapStateToProps({ users }) {
    return {
        users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectedUser: (user) => dispatch(saveAuthedUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
