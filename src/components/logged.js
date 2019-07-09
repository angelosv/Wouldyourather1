import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { getAuthedUser } from '../actions/authedUser'
import Avatar from 'react-avatar';
 
class Logged extends Component {

    render(){
        const { name, authedUser, avatar } = this.props
        return(
            <div>
            { authedUser
                    ? <div><Avatar src={avatar}></Avatar> Wellcome {name}</div>
            : 
                    <p>You must log in to view the page</p>
            }
            </div>
        )
    }
}


function mapStateToProps({ users, authedUser }) {

    if (authedUser){

    return {
        users: users,
        authedUser: authedUser,
        name: authedUser.name,
        avatar: authedUser.avatarURL

    }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSelectedUser: () => dispatch(getAuthedUser()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Logged)