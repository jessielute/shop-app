
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
        (<Link key={productList.url} to={`${this.state.match.path}/${productList.url}`}>
        <button className = {productList.name + "btn"}>{productList.name}</button></Link>)
      )
    }

    render() {
      return (
        <div>
        <h1>Welcome to the Blush and Turquoise Shop</h1>
        <h2>Established 1659</h2>
        <div className="transbox">
          
          <p><b>Peruse our boutique collection of Blush and Turquoise items. Languish in the beauty of Blush and Turqouise.
            Stay a while. Why, I hear you asking, ony Blush and Turquoise?</b></p>
            <p>Because, dear reader, they are the best colours. Anyone who says differently is incorrect and you can tell them tell
             that we (clearly experts on this matter) said so. We have consulted scientific journals (The Metropolitian Review of all Colours That Ever Were or Will Be, et al)
              primary sources (such as the IBECC (International Best Colours Ever Comittee) in order to prove our theory that the only two colours that <i>truly </i> 
               meet the standards of IBECC are Blush, and Turquoise.</p>
       
          <p><b>Shall we dive into the serene lagoon of Blush and Turquoise? Together, dear reader, we will adorn your home, your body, and your soul,
            with the scientifically proven Best Colours Ever.</b></p>
          <div>
            </div>
            {this.renderProductLinks()}
          </div>
          <Switch>
            {this.renderProductRoutes(this.onAddedProduct)}
          </Switch>
          <div className = "cartContainer">
          <Cart items={this.getCart()} />
          </div>
        </div>
      )
    }
}

export default Shop;