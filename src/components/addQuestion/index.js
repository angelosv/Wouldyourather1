import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { addQuestion } from '../../actions/questions'
import MenuNav from '../../components/MenuNav'
import { Card, Button, Form } from 'react-bootstrap'

class addNewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        redirectToNewPage: false,
    }
    handleChangeOptionOne = (e) => {
        const optionOne = e.target.value

        this.setState({ optionOne: optionOne })
    }

    handleChangeOptionTwo = (e) => {
        const optionTwo = e.target.value

        this.setState({ optionTwo: optionTwo })
        console.log('OPTION 2:',optionTwo)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props
        console.log('NEW QUESTION', optionOne, optionTwo)
        dispatch(addQuestion(optionOne, optionTwo));
        this.setState({ redirectToNewPage: true });
    }
    render(){

        const { authedUser, authedUserAvatar, authedUserID } = this.props
        const { optionOne, optionTwo, redirectToNewPage } = this.state
        console.log('Auth: ',
        authedUser)
        if (this.state.redirectToNewPage) {
            return <Redirect to='/home' />
        }
        
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>

            <h1>NewQuestion</h1>
            <Card>
                <Card.Header>Create a new Question</Card.Header>
                <Card.Body>
                    <Card.Title>Would you rather...</Card.Title>
      
                                <Form.Group controlId="">
                                    <Form.Control type="text" placeholder="Enter Option One" onChange={this.handleChangeOptionOne} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                </Form.Group>
                                
                                <div>or</div>
                                <Form.Group controlId="">
                                    <Form.Control type="text" placeholder="Enter Option One" onChange={this.handleChangeOptionTwo} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                               
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                    
                </Card.Body>
            </Card>
                </Form>

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
        authedUser: authedUser,
        authedUserAvatar: authedUserAvatar,
        authedUserID: authedUserID
    }
}


    export default connect(mapStateToProps)(addNewQuestion)