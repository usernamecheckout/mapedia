import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './Home';

export class Main extends React.Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLogin={this.props.handleLogin}/>;
    }

    getHome = () => {
        return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;
    }

    getRoot = () => {
        return <Redirect to="/login"/>
    }
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" render={this.getRoot}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/home" render={this.getHome}/>
                    <Route render={this.getRoot}/>
                </Switch>
            </div>
        );
    }
}

// import React, { Component } from 'react';
// import {Register} from './Register';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import {Login} from './Login';
//
// export class Main extends Component {
//     getLogin = () => {
//         return (
//             <Login/>
//         );
//     }
//     // if nothing match it will match the  <Rotue render={this.getRoot} /> and goback to login page.
//     getRoot = () => {
//         return (
//             <Redirect to='/login'/>
//         );
//     }
//     // if switch content matched, it won;t keep matching the rest content.
//     // exact all match, without exact, it will match url prefix. partial same will also excute like/register/adfd . also go to /register
//     render() {
//         return (
//             <div className="main">
//                 <Switch>
//                     <Route exact path="/" render={this.getRoot}/>
//                     <Route path="/register" component={Register}/>
//                     <Route path="/login" render={this.getLogin}/>
//                     <Route path="/home" render={this.getHome}/>
//                     <Route render={this.getRoot}/>
//                 </Switch>
//             </div>
//         );
//     }
// }

