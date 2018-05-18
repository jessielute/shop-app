import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path={`/`} component= {Home} /> 
                    <Route path={`/shop`} component={Shop} />
                </Switch>
            </div>
        )
    }
}        

export default App