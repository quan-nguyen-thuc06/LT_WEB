import React, {Component} from 'react';
import '../node_modules/boostrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/home.component';
import Nav from './component/nav.component';
import Login from './component/login.component';
import Register from './component/register.component';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Forgot from './component/forgot.component';
export default class App extends Component {
  state ={};
  componentDidMount =  () => {
    const config = {
        headers: {
            Authorization: 'Bearer' + localStorage.getItem('token')
        }
    }
    axios.get('http://localhost:8000/user', config).then(
        res => {
            this.setUser(res.data)
        },
        err => {
            console.log(err)
        }
    )
  };
  setUser = user =>{
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Nav user={this.state.user} setUser={this.setUser}/>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user} />}/>
                <Route exact path="/login" component={() => <Login setUser={this.setUser}/>}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/forgot" component={Forgot}/>
              </Switch>
            </div>
          </div>
      </div>
      </BrowserRouter>
    );
  }
};