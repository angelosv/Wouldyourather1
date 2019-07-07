import React, { Component } from 'react'
import { connect } from 'react-redux' 
import MenuNav from '../../components/MenuNav'
import Avatar from 'react-avatar';
import { getAuthedUser } from '../../actions/authedUser'
import { Redirect } from 'react-router-dom'
import ControlledTabs from './ControlledTabs'

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
    }
    render(){
        const { authedUser, users } = this.props

        if (authedUser === null) {
            return <Redirect to='/' />
        }

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