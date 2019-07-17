import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
import { savingQuestionAnswer } from '../../actions/questions'
import { withRouter } from 'react-router-dom';

class QuestionCard extends Component {

    constuctor() {
        this.loadQuestionDetails = this.routeChange.bind(this);
    }



    loadQuestionDetails(e, question) {
        let path = `/questions/` + question
        this.props.history.push(path)    }

render(){

    const { users, author, question, id} = this.props
   // const avatar =  users.users[author].avatarURL
    console.log('This is a Question@: ', question.optionOne.text)
   return(
       <div className="card" onClick={(e) => this.loadQuestionDetails(e, id)}>
           <Avatar src={users[question.author].avatarURL}/>
               <h3> Would you rather... </h3>
           <label className="question-choice" htmlFor='optionOne'>{question.optionOne.text} </label>
               <br />
           <label className="question-choice" htmlFor='optionTwo'>{question.optionTwo.text}</label>
               <br />

       </div>
   )
}

}

const mapStateToProps = ({users, authedUser, questions}, {id})=>{
return{
    users: users,
    authedUser: authedUser,
    question: questions[id],
}
}

export default withRouter(connect(mapStateToProps)(QuestionCard))