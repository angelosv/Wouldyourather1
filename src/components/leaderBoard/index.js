import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CardLeader from './cardLeader'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'

class leaderBoard extends Component {
  state = {
    redirectToReferrer: false
  }
    render(){
            const { userArray, authedUser } = this.props
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state

      if (redirectToReferrer === true) {
        return <Redirect to={from} />
      }

        return(
            <div>
                <Container>

                {
                 userArray.map(user=>(
                    <CardLeader key={user.id}
                    id={user.id}
                    avatarUrl={user.avatarURL}
                    name={user.name}
                    answeredResults={user.answeredResults}
                    questionsResults={user.questionsResults}
                    ranking={user.ranking}
                     answeredResults={user.answeredResults}
                    />
                 ))   
                    
                
                }
                    </Container>
            </div>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {

  const userArray = Object.keys(users).map((user) => {
    const userInfo = {
      id: users[user].id,
      avatarURL: users[user].avatarURL,
      name: users[user].name,
      answeredResults: Object.keys(users[user].answers).length,
      questionsResults: users[user].questions.length,
    }

    const ranking = userInfo.answeredResults + userInfo.questionsResults

    userInfo.ranking = ranking;

    return userInfo;
  }).sort((a,b) => (
    b.ranking - a.ranking
  ))

  
  return {
    authedUser,
    userArray
  }
}


export default connect(mapStateToProps)(leaderBoard)