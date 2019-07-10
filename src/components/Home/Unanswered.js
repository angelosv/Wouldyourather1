import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
import { withRouter } from 'react-router-dom';
import { savingQuestionAnswer } from '../../actions/questions'

class Unanswered extends Component {
    state = {
        selectedOption: ''
    };
    constuctor() {
        this.loadQuestionDetails = this.routeChange.bind(this);
    }

    loadQuestionDetails(e, questionId) {
  console.log('HEEEEEE')
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveQuestionAnswer(this.state.selectedOption);
    };
    render(){
        const { authedUser, questions, users, unAnsweredQuestions } = this.props
        console.log('TEXT', unAnsweredQuestions)
        return (
            
                unAnsweredQuestions.map(question => (
                    <QuestionCard
                        key={question.id}
                        questionID={question.id}
                        author={question.author}
                        optionOne={question.optionOne.text}
                        optionTwo={question.optionTwo.text}
                        userID={question.author}
                />
            ))
        
        
           
           
        )
    }
}

function mapStateToProps({authedUser, questions, users}){
    let unAnsweredQuestions = {}
    
    if (authedUser !== null) {

        unAnsweredQuestions = Object.values(Object.values(questions)).filter((question) =>
            !question.optionOne.votes.includes(authedUser.id) && !question.optionTwo.votes.includes(authedUser.id)); 

    
    }
    return {
        authedUser: authedUser,
        questions: questions, 
        users: users, 
        unAnsweredQuestions: Object.values(unAnsweredQuestions)
    }
    

}

export default connect(mapStateToProps)(Unanswered)