import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Card, Button} from 'react-bootstrap'
import Avatar from 'react-avatar';

class CardLeader extends Component{
    render(){

        const { id, avatarUrl, name, answeredResults, questionsResults, ranking,  } = this.props
console.log('THISPROPS', this.props)
        return(
            <div key={id}>
                <Card key={id}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                    <Avatar src={avatarUrl} />
                        <Card.Title>{name}</Card.Title>
                           <div>Answered Questions: {answeredResults}</div>
                            <div>Questions Asked: {questionsResults}</div>
                        <h4>Total Score: {ranking}</h4>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


const mapStateToProps = ({users, authedUser}) =>{
return {
            authedUser: authedUser,

}
}


export default connect (mapStateToProps)(CardLeader)