
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home'
import Login from './Login'
import addQuestion from './addQuestion'
import leaderBoard from './leaderBoard'
import { handleInitialData } from '../actions/shared'
import Loged from './logged'
const Public = () => <h3>DEBES REGISTRARTE</h3>
const Protected = () => <h3>Protected</h3>

class Routes extends Component {
    componentDidMount() {
        console.log('==== Routes mounted!');
    }

    render() {
        console.log('Routes props', this.props.authedUser);
        let  authedUser  = false
        if (this.props.authedUser){
            authedUser = true
        }
        console.log('authedUser ', authedUser);

        return (
            <BrowserRouter>
                <Loged authed={authedUser}/>
                    {this.props.loading === true
                    ? null
                    : 
                    <div>

                        <Route path='/' exact component={Login} />
                        <Route path='/login' exact component={Login} />
                        <PrivateRoute path='/home/' component={Home} authed={authedUser} />
                        <PrivateRoute path='/new' component={addQuestion} authed={authedUser}/>
                        <PrivateRoute path='/leaderboard' component={leaderBoard} authed={authedUser}/>
                        <PrivateRoute path='/protected' component={Protected} authed={authedUser} />
                    </div>

                }
            </BrowserRouter>

        );
    }
}

const mapStateToProps = state => ({ authedUser: state.authedUser });
export default connect(mapStateToProps, handleInitialData)(Routes);