import React, { Component } from 'react'
import UserCard from './User-card'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Answered extends Component {

    state = {
        loading: true,

    }


    render() {
        const { authedUser, questions, users, answeredQuestions } = this.props
        return (
            <div>
                {
                    answeredQuestions.map(question => (
                            <UserCard
                                key={question.id}
                                author={question.author}
                                optionOne={question.optionOne.text}
                                optionTwo={question.optionTwo.text}
                                userID={question.author}
                                optionOneVotes={question.optionOne.votes}
                                optionTwoVotes={question.optionTwo.votes}
                                
                            />
                    )
                    )
                }
            </div>
            )
    }
}
function mapStateToProps({ authedUser, questions, users }){

    let answeredQuestions = {}
    answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id));
    return {
        authedUser: authedUser,
        questions: questions, 
        users: users, 
        answeredQuestions: Object.values(answeredQuestions)
}}



export default connect(mapStateToProps)(Answered)