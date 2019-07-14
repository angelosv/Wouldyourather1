import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux' 
import { Dropdown, Container, Form, Button } from 'react-bootstrap'
import { Redirect } from "react-router";
import { saveAuthedUser } from '../../actions/authedUser'
import MenuNav from '../../components/MenuNav'

class Login extends Component {
    state = {
        users: {},
        selectUser: null,
        redirectToNewPage: false,
        userID: '',
        redirectToReferrer: false

    }

    handleSubmit = (e, user) => {
console.log('USER', user)
    }

    render() {

        const { users } = this.props
        const { redirectToNewPage, userID } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToNewPage) {
            return (
                <Redirect to={"/home/" + userID} />
            )
        }
        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
        return(
            <Container className="text-center">
                <MenuNav/>
                <div>
                    <p>You must log in to view the page</p>
                    <button onClick={this.handleSubmit}>Log in</button>
                </div>
                <Row className="text-center ">
                    <Col xs="12" sm="12" lass="text-center "><div className="card text-center"><h3>Select User:</h3>
                        <Form>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                    Pick a User
                                    </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        Object.keys(users).map(user =>
                                            <Dropdown.Item key={users[user].id} eventKey={user} value={user} onSelect={(e) => this.login(e, users[user], users[user].id)}>
                                                {users[user].name}

                                            </Dropdown.Item>)
                                    }   </Dropdown.Menu>
                            </Dropdown>

                        </Form>
                    </div>
                    </Col>
                </Row>
            </Container>
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


export default connect(mapStateToProps, mapDispatchToProps)(Login)
