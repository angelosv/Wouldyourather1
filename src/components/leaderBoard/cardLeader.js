import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Card, Button} from 'react-bootstrap'
import Avatar from 'react-avatar';

class CardLeader extends Component{
    render(){

        const { id, avatarUrl, name, answeredResults, questionsResults, ranking,  } = this.props
console.log('THISPROPS', this.props)
        return(
            <div>
                <Card key={id}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                    <Avatar src={avatarUrl} />
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Answered Questions: {answeredResults}</p>
                            <p>Questions Asked: {questionsResults}</p>
                        </Card.Text>
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