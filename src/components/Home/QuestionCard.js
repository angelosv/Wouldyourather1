import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
import { savingQuestionAnswer } from '../../actions/questions'
import { withRouter } from 'react-router-dom';

class QuestionCard extends Component {

    constuctor() {
        this.loadQuestionDetails = this.routeChange.bind(this);
    }



    loadQuestionDetails(e, questionID) {
        let path = `/questions/` + questionID
        this.props.history.push(path)    }

render(){

    const { users, author, questionID} = this.props
    const avatar =  users.users[author].avatarURL

   return(
       <div className="card" onClick={(e) => this.loadQuestionDetails(e, questionID)}>
           <Avatar src={avatar}/>
               <h3> Would you rather... </h3>
               <label className="question-choice" htmlFor='optionOne'> {this.props.optionOne} </label>
               <br />
               <label className="question-choice" htmlFor='optionTwo'>{this.props.optionTwo}</label>
               <br />

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

export default withRouter(connect(mapStateToProps)(QuestionCard))