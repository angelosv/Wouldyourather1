
import React from 'react'
import {
    Redirect
} from 'react-router-dom'
import { saveAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux' 
import { Dropdown, Form } from 'react-bootstrap'


class Login extends React.Component {
    state = {
        redirectToReferrer: false,
        selectedUser: '',
        userID: ''
    }

    handleChange = (e, user) =>{
    this.setState({selectedUser: user}, ()=>{
        console.log('STATE', user)
    })

    }

    login = (event) => {
        event.preventDefault();

        const { selectedUser } = this.state;
        this.props.selectedUser(selectedUser)
        this.setState({ userID: selectedUser.id })
        this.setState(() => ({ redirectToReferrer: true }))
               
        }



   
      
   
    render() {
        const { users, authedUser } = this.props

        const { from } = this.props.location.state || { from: { pathname: '/home/' } }
        const { redirectToReferrer } = this.state
        const userid = this.state.selectedUser.id

        console.log('FROM:', userid )

        if (authedUser !== null) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <Form onSubmit={this.login}>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                        Pick a User
                                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            Object.keys(users).map(user =>
                                <Dropdown.Item key={users[user].id} eventKey={user} value={user} onSelect={(e) => this.handleChange(e, users[user], users[user].id)} >
                                    {users[user].name}

                                </Dropdown.Item>)
                        }   </Dropdown.Menu>
                </Dropdown>
                <p>You must log in to view the page</p>
                    <input type="submit" disabled={!userid} value="Submit" />
                </Form>

            </div>
        )
    }
}
function mapStateToProps({ users, authedUser }) {
    return {
        users, authedUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectedUser: (user) => dispatch(saveAuthedUser(user, ()=>{
            setTimeout(user, 100)
        })),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
