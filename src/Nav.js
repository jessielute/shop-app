import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'


class Nav extends React.Component {
    render() {
        return (
            <div>
                <h1>Nav</h1>
                <p>i am a nav bar</p>
                <div>
                    <Link to={`/`}><button>Home</button></Link>
                    <Link to={`/shop`}><button>Shop</button></Link>
                </div>
            </div>
        )
    }
}

export default Nav