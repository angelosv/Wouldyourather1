import React, { Component} from 'react'
import { connect } from 'react-redux';
import { savingQuestionAnswer } from '../actions/questions'
import Avatar from 'react-avatar'
import MenuNav from './MenuNav'


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
        const { answer } = this.state
        const { dispatch, questionID } = this.props

        console.log('Aqui si qu esi',this.props.match.params.id)
        this.props.savingQuestionAnswer(this.state.answer)
        this.setState({ answered: true })



    }

    render(){

        const { question, answer, total, percOne, percTwo, answered } = this.props
        console.log('ANSWERED',this.state.answered)
        return(
            <div><MenuNav/>
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <Avatar />
                        <h3> Would you rather... </h3>
                        
{
                            this.state.answered === false?
                                <div> <input type='radio' name='option'  value='optionOne' id='optionOne' onChange={this.handleChange} />
                                    <label className="question-choice" htmlFor='optionOne'> {question.optionOne.text} </label>
                                    <br />
                                    <input type='radio' name='option' value='optionTwo' id='optionTwo' onChange={this.handleChange} />
                                    <label className="question-choice" htmlFor='optionTwo'>{question.optionTwo.text}</label>
                                    <br />
                                    <input className="question-button" type='submit' />
                                    </div>
:
                                <div>
                                    <div className="progress">
                                        <label className="question-choice" htmlFor='optionOne'> {question.optionOne.text} </label>

                                        <div className="progress-one" style={{ width: `${percOne}%` }}>{`${percOne}%`}</div>
                                        <label className="question-choice" htmlFor='optionTwo'>{question.optionTwo.text}</label>

                                        <div className="progress-two" style={{ width: `${percTwo}%` }}>{`${percTwo}%`}</div>
                                    </div>
                                    <div className="total">
                                        Total number of votes: {total}
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
    const answers = users[authedUser.id].answers;
    const { id } = match.params
    const question = questions[id];
    total = question.optionOne.votes.length + question.optionTwo.votes.length;

    console.log('ID and Answers', id, answers, question)
    percOne = financial((question.optionOne.votes.length / total) * 100);
    percTwo = financial((question.optionTwo.votes.length / total) * 100);

    return {
        question,
        answer,
        total,
        percOne,
        percTwo
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
