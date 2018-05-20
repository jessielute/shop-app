import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import App from './App';


class Turquoise extends React.Component {
    constructor(state) {
        super(state);
        this.onAddedProduct = state.onAddedProduct;
    }
    render() {
        return (
            <div>
                <h1>Turquoise</h1>
                <p>this is the turquoise page</p>
                <button onClick={() => this.onAddedProduct({ name: 'Turquoise', price: 12 })}>
                    ADD TO MUTHAFUCKING CART
                </button>
            </div>
        )
    }
}

export default Turquoise;