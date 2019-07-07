import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
import { savingQuestionAnswer } from '../../actions/questions'

class QuestionCard extends Component {

state={
    answer: ''
}

    handleChange = (e) => {
        const answer = e.target.value

        this.setState({ answer: answer })
}

handleSubmit = (e) => {
        e.preventDefault();
    const { answer } = this.state
    const { dispatch, questionID } = this.props

    console.log(this.props)
    dispatch(savingQuestionAnswer(questionID, answer))

    

    }


render(){

    const {users, authedUser} = this.props
   return(
       <div className="card">
           <form onSubmit={this.handleSubmit}>
               <Avatar/>
               <h3> Would you rather... </h3>
               <input type='radio' name='option' value='optionOne' id='optionOne' onChange={this.handleChange} />
               <label className="question-choice" htmlFor='optionOne'> {this.props.optionOne} </label>
               <br />
               <input type='radio' name='option' value='optionTwo' id='optionTwo' onChange={this.handleChange} />
               <label className="question-choice" htmlFor='optionTwo'>{this.props.optionTwo}</label>
               <br />
               <input className="question-button" type='submit' />
    </form>

       </div>
   )
}

}

const mapStateToProps = (users, authedUser, questions)=>{
return{
    users: users,
    authedUser: authedUser,
    questions: questions,
}
}

export default connect(mapStateToProps)(QuestionCard)