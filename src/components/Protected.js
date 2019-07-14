import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
class Protected extends Component {
    state = {
        redirectToReferrer: false
    }
    render() {
        
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        console.log('FROM:', from)
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div><h3>PROTECTED</h3></div>
        )
    }
}

export default Protected