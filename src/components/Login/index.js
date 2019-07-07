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
        userID: ''
    }


    handleSubmit = (e, user) => {

        this.props.selectedUser(user)
            .then(() => this.setState({ userID: user.id }))
            .then(() => this.setState({ redirectToNewPage: true }))

    }
    render() {

        const { users } = this.props
        const { redirectToNewPage, userID } = this.state

        if (redirectToNewPage) {
            return (
                <Redirect to={"/home/" + userID} />
            )
        }

        return(
            <Container className="text-center">
                <MenuNav/>

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
                                            <Dropdown.Item key={users[user].id} eventKey={user} value={user} onSelect={(e) => this.handleSubmit(e, users[user], users[user].id)} >
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
