
import React, { Component } from 'react';
import './Home.css';
import {Switch, Link, Route} from 'react-router-dom';
import App from './App';
import HomeStyles from './Home.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
const USERNAME_LOCALSTORAGE_KEY = 'username:localstorage';




function getUsernameFromLocalStorage() {
  if (window && window.localStorage) {
    return window.localStorage.getItem(USERNAME_LOCALSTORAGE_KEY);
  }

  return '';
}

function setUsernameFromLocalStorage(username) {
  //debugger;
  if (window && window.localStorage) {
    window.localStorage.setItem(USERNAME_LOCALSTORAGE_KEY, username);
  }
}

//gets stored user name from local storage
class Home extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      username: getUsernameFromLocalStorage()
    };
  }

  //
  handleChange(event) {
    setUsernameFromLocalStorage(event.target.value);  
    this.setState({ username: event.target.value });
  }

  //beginning of form and welcome message
  render() {
    return (
      <div className="homeContainer">
        {this.state.username ? <div className="welcomeMessage"><span><h4>Hello {this.state.username}, welcome back.</h4></span></div> : ''}
        <FormControl>
          <InputLabel htmlFor="name-input">User Name</InputLabel>
          <Input id="name-simple" value={this.state.username} onChange={this.handleChange.bind(this)} />
        </FormControl>        
      </div>
    )
  }
}

export default Home;
