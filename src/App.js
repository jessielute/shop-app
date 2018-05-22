import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'
import { fetchCart, addToCart } from './Api';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cart: []
    };
  }

  async fetchCart() {
    return fetchCart();
  }

  async componentWillMount() {
    const cart = await this.fetchCart();
    debugger;
    this.setState(prevState => {
      return ({
        cart: [...prevState, ...cart.data]
      });
    });
  }

  getCart() {
    return this.state.cart;
  }

  async addProductToCart({ id,  name, price }) {
    if (!name || name === '' ) {
      throw new Error('I can\'t do that dave');
    }
    
    await addToCart({ id, name, price});

    this.setState(prevState => {
      return ({
        cart: [...prevState.cart, { id, name, price }]
      })
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path={`/`} component={Home} /> 
          <Route path={`/shop`} render={ (props) => (<Shop getCart={this.getCart.bind(this)} key="store" onAddedProduct={this.addProductToCart.bind(this) } {...this.props} {...props}  />)}/>
        </Switch>
      </div>
    )
  }
}        

export default App