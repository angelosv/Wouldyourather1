import React, {Component} from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar';
class user_card extends Component {
    render(){

        const { users, author, authedUser, optionOne, optionTwo, optionOneVotes, optionTwoVotes} = this.props

        console.log('----->',Object.values(users)[2], optionOneVotes.includes(authedUser.id))
        return(
        <div className="card">
            <div className="row">
                <div className="col-2 align-self-center">
                    <div className="uImg">
                    <p>Author: </p>
                    {
                                authedUser.id === author 
                                ? <p>By you</p>
                                : <p>{author}</p>
                    }
                    
                            <Avatar name="Foo Bar" src={Object.values(users)[2]} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="user">
                        <div className="info">
                                <h2 className="">Would you rather...
</h2>
                                <p>{optionOne} <span>{optionOneVotes.length}</span>{
                                    optionOneVotes.includes(authedUser.id)
                                        ? <span>You Chose</span> 
                                        : <span></span>
                                
                                
                                }</p>
                                <p>{optionTwo} <span>{optionTwoVotes.length}</span>{
                                    optionTwoVotes.includes(authedUser.id)
                                        ? <span><b>You Chose</b></span>
                                        : <span></span>


                                }</p>
                                
                        </div>
                        <div className="type">
                            <div className="btn btn-success">pro</div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users, authedUser }, {  userID  }) => {
    const user = users[userID];
    return {
        users: user,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(user_card)