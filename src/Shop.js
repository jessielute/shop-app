
import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import App from './App';
import Turquoise from './Turquoise';
import Blush from './Blush';
import Cart from './Cart'
import { fetchProductsList } from './Products';
import { ProductCategory } from './ProductCategory';

class Shop extends React.Component {
    constructor(e) {
      super(...e);  

      this.state = {
        productsLists: [],
        match: e.match
      };

      this.getCart = e.getCart;
      this.onAddedProduct = e.onAddedProduct;
    }

    async componentDidMount() {
      const productsLists = await fetchProductsList();

      this.setState(prevState => {
        return Object.assign(prevState, {productsLists});
      });
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
      return this.state.productsLists.map((productList) => {
        console.log(`${this.state.match.path}/${productList.url}`);
        return (<Route key={`route-${productList.url}`} path={`${this.state.match.path}/${productList.url}`} render={ 
          (props) => (<ProductCategory key={productList.url} onAddedProduct={onAddedProduct} productList={productList.products} productType={productList.name} {...props}/>) 
        } />)
      });
    }

    renderProductLinks() {
      return this.state.productsLists.map((productList) =>
        (<Link key={productList.url} to={`${this.state.match.path}/${productList.url}`}><button>{productList.name}</button></Link>)
      )
    }

    render() {
      return (
        <div>
        <h1>Welcome to the Blush and Turquoise Shop</h1>
        <h2>Established 1659</h2>
        <div class= "transbox">
          
          <p>Peruse our boutique collection of blush and turquoise items. Languish in the beauty of blush and turqouise.
            Stay a while. Why ony Blush and Turquoise? 
            Because, they are the best colours. Anyone who says differently is incorrect and you can tell them tell
             that we (clearly experts on this matter) have consulted scientific journals, primary sources (such as 
             the IBECC (International Best Colours Ever Comittee) in order to prove our theory that hte only two colours that <i>truly </i> 
               meet the standrards of IBECC are Blush, and Turquoise. 
          </p>
          <div>
            </div>
            {this.renderProductLinks()}
          </div>
          <Switch>
            {this.renderProductRoutes(this.onAddedProduct)}
          </Switch>
          <Cart items={this.getCart()} />
        </div>
      )
    }
}

export default Shop;