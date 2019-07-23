import React, {Component} from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
import { withRouter } from 'react-router-dom'

class user_card extends Component {


    constuctor() {
        this.loadQuestionDetails = this.routeChange.bind(this);
    }
    loadQuestionDetails(e, question) {
        let path = `/questions/` + question
        this.props.history.push(path)
    }

    render(){

        const { users, author, question, id, authedUser } = this.props
        console.log('ESTO ES ID:', question)
        return(
            <div className="card" onClick={(e) => this.loadQuestionDetails(e, id)}>
                <div className="col-2 align-self-center">
                    <div className="uImg">
                        <p>Author: </p>
                        {
                            authedUser.id === author
                                ? <p>By you</p>
                                : <p>{author}</p>
                        }

                        <Avatar name="Foo Bar" src={users[question.author].avatarURL} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="user">
                        <div className="info">
                            <h2 className="">Would you rather...
</h2>





                            <label className="question-choice" htmlFor='optionOne'>{question.optionOne.text} </label>
                            <br />
                            <label className="question-choice" htmlFor='optionTwo'>{question.optionTwo.text}</label>
                            <br />
                            

                        </div>
                        <div className="type">
                            <div className="btn btn-success">pro</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users, authedUser, questions }, { id }) => {
    return {
        users: users,
        authedUser: authedUser,
        question: questions[id],
    }
}

export default withRouter(connect(mapStateToProps)(user_card))