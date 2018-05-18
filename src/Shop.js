
import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import App from './App';
import Turquoise from './Turquoise';
import Blush from './Blush';

class Shop extends React.Component {
    render() {
        return (
            <div>
                <h1>Shop</h1>
                <p>this is the shop page</p>
                <div>
                    <Link to={`${this.props.match.path}/blush`}><button>Blush</button></Link>
                    <Link to={`${this.props.match.path}/turqoise`}><button>Turquoise</button></Link>
                </div>
                <Switch>
                    <Route path={`${this.props.match.path}/blush`} component={Blush} />
                    <Route path={`${this.props.match.path}/turqoise`} component={Turquoise} /> />
                </Switch>
            </div>
        )
    }
}

export default Shop;