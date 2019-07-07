import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import addQuestion from './addQuestion'
import Home from './Home'
import Login from './Login'
import leaderBoard from './leaderBoard'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Login} />
                <Route path='/home/' component={Home} />
                <Route path='/new' component={addQuestion} />
                <Route path='/leaderboard' component={leaderBoard} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ selectUser }) {
  return {
    loading: selectUser === null
  }
}


export default connect(mapStateToProps)(App);
