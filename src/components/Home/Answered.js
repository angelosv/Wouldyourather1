import React, { Component } from 'react'
import UserCard from './User-card'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Answered extends Component {

    state = {
        loading: true,

    }
    constuctor() {
        this.loadQuestionDetails = this.routeChange.bind(this);
    }

    render() {
        const { authedUser, questions, users, answeredQuestions } = this.props
        console.log('answeredQuestions',answeredQuestions)
        return (
            <div>
                {
                    answeredQuestions.map(question => (
                        <li key={question}>

                        <UserCard
                            id={question}

                        />
                        </li>

                        )
                    )
                }
            </div>
            )
    }
}
function mapStateToProps({ authedUser, questions, users }){
    console.log('answeredQuestions', authedUser, users)

    let answeredQuestions = {}
    answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id));
    return {
        authedUser: authedUser,
        questions: questions, 
        users: users, 
        answeredQuestions: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)

}}



export default connect(mapStateToProps)(Answered)