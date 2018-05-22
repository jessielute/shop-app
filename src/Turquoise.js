import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import App from './App';


class Turquoise extends React.Component {
    constructor(state) {
        super(state);
        this.onAddedProduct = state.onAddedProduct;
        this.product = state.product;
    }

    render() {
        return (
            <div>
                <h1>{this.product.name}</h1>
                <p>${parseFloat(this.product.price).toFixed(2)}</p>
                <button onClick={() => this.onAddedProduct(this.product)}>
                    add {this.product.name} to cart
                </button>
            </div>
        )
    }
}

export default Turquoise;