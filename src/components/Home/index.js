import React, { Component } from 'react'
import { connect } from 'react-redux' 
import MenuNav from '../../components/MenuNav'
import Avatar from 'react-avatar';
import { getAuthedUser } from '../../actions/authedUser'
import ControlledTabs from './ControlledTabs'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    state = {
        loading: true,
        showUnansweredQuestions: true,
        redirectToReferrer: false

    }
    render(){
        const { authedUser, users } = this.props

       



        return(
            <div>
            
                <MenuNav/>
                <Avatar name="Foo Bar" src={authedUser.avatarURL} />
                <h1>{authedUser.name}</h1>
                <ControlledTabs />

            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {



    return {
        users: users,
        authedUser: authedUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSelectedUser: () => dispatch(getAuthedUser()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)