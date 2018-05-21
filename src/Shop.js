
import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import App from './App';
import Turquoise from './Turquoise';
import Blush from './Blush';
import Cart from './Cart'
import { fetchProductsList } from './Products';

class Shop extends React.Component {
    constructor(e) {
      super(e);
      this.state = {
        cart: [],
        productsList: []
      };
    }
 
    createProduct({ name, price }) {
        return { name, price };
    }
    
    addProductToCart({ name, price }) {
        if (!name || name === '' ) {
            throw new Error('I can\'t do that dave');
        }

        this.setState(prevState => {
          return ({
            cart: [...prevState.cart, {name, price}],
            productsList: prevState.productsList
          })
        }
      );
    }

    componentDidMount() {
      fetchProductsList().then((productsList) => {
        this.setState(prevState => {
          return Object.assign(prevState, {productsList});
        });
      })
    }

    // state = {
    //     cart: ,
    // }
    // ** ADDING PRODUCTS TO SHOP -- Part 1 return of the jedi **
    // 1. Add array of objects containing product details to SHOP STATE
    // 2. pass array of product detaisl down BLUSH and MINT
    // 3. MAP over array of product details in each details component
    // 4. Details show up on page! Woop. 
    
    renderProductRoutes(onAddedProduct) {
      return this.state.productsList.map((product) => 
        (<Route exact path={`${this.props.match.path}/${product.id}`} render={ (props) => (<Turquoise key={product.id} onAddedProduct={onAddedProduct} product={product} />) } />)
      );
    }

    renderProductLinks() {
      return this.state.productsList.map((product) =>
        (<Link to={`${this.props.match.path}/${product.id}`}><button>{product.name}</button></Link>)
      )
    }

    render() {
        const boundCallback = this.addProductToCart.bind(this);

        return (
            <div>
                <h1>Shop</h1>
                <p>This is the shop page.</p>
                <div>
                    {this.renderProductLinks()}
                </div>
                <Switch>
                    {this.renderProductRoutes(boundCallback)}
                </Switch>
                <Cart items={(this.state || {}).cart || []} />
            </div>
        )
    }
}

export default Shop;