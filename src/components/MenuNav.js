import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Nav, NavItem } from 'reactstrap';
import { connect} from 'react-redux'
import {saveAuthedUser } from '../actions/authedUser'
class MenuNav extends Component {

    handleLogOut = (e) => {
        this.props.selectedUser(null)
    }

    render(){
        const { authedUserID, authedUser } = this.props

        return(

            <div>
                <h1>Would You Rather</h1>
                <Nav>
                    <NavItem>
                       <Link to={'/home/'}> HOME </Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/new'}> NEW QUESTION </Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/leaderboard'}> LEADER BOARD </Link>
                    </NavItem>
                    <NavItem>
                        <Link onClick={this.handleLogOut}> LOGOUT </Link>
                    </NavItem>
                </Nav>
                <hr />
                
            </div>
        )
    }
} 


function mapStateToProps({ authedUser }) {
    let authedUserAvatar = ''
    let authedUserID = ''

    if (authedUser !== null) {
        authedUserAvatar = authedUser.avatarURL;
        authedUserID = authedUser.id
    }

    return {
        authedUserAvatar: authedUserAvatar,
        authedUserID: authedUserID
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectedUser: (user) => dispatch(saveAuthedUser(user)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MenuNav)