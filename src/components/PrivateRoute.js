import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
        <Route {...rest} render={(props) => (
        authed !== null
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
    )

const mapStateToProps = (users, authedUser)=>{


return{
    users: users,
    authedUser: authedUser
}

}


export default connect(mapStateToProps)(PrivateRoute)