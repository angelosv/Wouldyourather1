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


    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveQuestionAnswer(this.state.selectedOption);
    };
    render(){
        const { authedUser, questions, users, unAnsweredQuestions, unAnsweredQuestions2 } = this.props
        console.log('TEXT', questions.author)
        return (
            <div>
                {unAnsweredQuestions.map((question) => (
                    <li key={question}>
                        <QuestionCard id={question}/>
                    </li>
                    ))}
            </div>
        
           
           
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
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
    }
    }
    


export default connect(mapStateToProps)(Unanswered)