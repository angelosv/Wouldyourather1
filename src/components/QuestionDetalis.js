import React, { Component} from 'react'
import { connect } from 'react-redux';
import { savingQuestionAnswer } from '../actions/questions'
import Avatar from 'react-avatar'
import {
    Redirect, Link
} from 'react-router-dom'
import MissingQuestion from "./MissingQuestion";

class QuestionDetalis extends Component {
    state = {
        answer: '',
        answered: false
    }

    handleChange = (e) => {
        const answer = e.target.value

        this.setState({ answer: answer })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.savingQuestionAnswer(this.state.answer)
        this.setState({ answered: true })
    }

    render(){
        const { match } = this.props
        const { questions, question, users, authedUser } = this.props
        const { id } = match.params

        const QuestionIDExists = questions.hasOwnProperty(id)


        if (QuestionIDExists === false) {
            return <Redirect to={'/missingQuestion'} />
        }


        const total = question.optionOne.votes.length + question.optionTwo.votes.length;

        const percOne = financial((question.optionOne.votes.length / total) * 100);
        const percTwo = financial((question.optionTwo.votes.length / total) * 100);
        return(
            <div>
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <Avatar src={users[question.author].avatarURL}/>
                    <p>{question.author}</p>
                    <h3> Would you rather... </h3>

                    {
                            this.state.answered === false ?

                            <div> <input type='radio' name='option' value='optionOne' id='optionOne' onChange={this.handleChange} />
                                <label className="question-choice" htmlFor='optionOne'> {question.optionOne.text} </label>
                                <br />
                                <input type='radio' name='option' value='optionTwo' id='optionTwo' onChange={this.handleChange} />
                                <label className="question-choice" htmlFor='optionTwo'>{question.optionTwo.text}</label>
                                <br />
                                <input className="question-button" type='submit' />
                            </div>
                            :
                            <div>
                                    <div><p>Option One ({question.optionOne.votes.length} Votes) {
                                        this.state.answer === 'optionOne'
                                        ? <span><b>Your Vote</b> </span>
                                        : null

                                    }/ Option Two ({question.optionTwo.votes.length} Votes) {this.state.answer === 'optionTwo'
                                        ? <span><b>Your Vote</b> </span>
                                        : null
} </p>
</div>
                                <div className="progress">
                                    <label className="question-choice" htmlFor='optionOne'> {question.optionOne.text}                                     <p>({question.optionOne.votes.length} Votes)</p>
</label>

                                    <div className="progress-one" style={{ width: `${percOne}%` }}>{`${percOne}%`}</div>
                                        <label className="question-choice" htmlFor='optionTwo'>{question.optionTwo.text}</label>

                                    <div className="progress-two" style={{ width: `${percTwo}%` }}>{`${percTwo}%`}</div>
                                </div>
                                <div className="total">
                                    Total number of votes: {total}
                                </div>
                                <div>
                                        <button><Link to={'/home'}>Back to Home</Link></button>
                                </div>
                            </div>
                    }

                </form>

            </div>
            </div>
        )
    }
}




function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
   
    let answer, percOne, percTwo, total
    const { id } = match.params
    const question = questions[id];
    const user = users[authedUser.id]
    
       return {
           users,
        questions,
        question,
        authedUser,
        showResults: Object.keys(user.answers).includes(id)
    

    }
}



function mapDispatchToProps(dispatch, props) {
    const { id } = props.match.params;
    return {
        savingQuestionAnswer: (answer) => {
            dispatch(savingQuestionAnswer(id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetalis)
