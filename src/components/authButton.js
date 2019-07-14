import React, { Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import { connect } from 'react-redux' 
import { saveAuthedUser } from '../actions/authedUser'

class AuthButton extends Component {

render(){
    const { authed, history } = this.props
    console.log('AQUI', authed, history)

    return(
        authed !== null ? (
            <p>
                Welcome! <button onClick={() => {
                    this.props.selectedUser(null)
                        .then(() => history.push('/'))
                }}>Sign out</button>
            </p>
        ) : (
                <p>You are not logged in.</p>
            )     
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
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AuthButton)
)