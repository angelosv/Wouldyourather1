import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import addQuestion from './addQuestion'
import Home from './Home'
import Login from './Login'
import leaderBoard from './leaderBoard'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import PrivateRoute from './PrivateRoute'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Routes from './routes'

const Public = () => <h3>DEBES REGISTRARTE</h3>
const Protected = () => <h3>Protected</h3>
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser} = this.props
    return (
      <Routes authedUser={authedUser}/>
    );
  }
}

function mapStateToProps({ selectUser, authedUser }) {
  return {
    loading: selectUser === null,
    authedUser: authedUser

  }
}


export default connect(mapStateToProps)(App);
