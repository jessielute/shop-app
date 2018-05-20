
import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import App from './App';
import Turquoise from './Turquoise';
import Blush from './Blush';
import Cart from './Cart'
import { Products } from './Products';

class Shop extends React.Component {

    createProduct({ name, price }) {
        return { name, price };
    }
    
    addProductToCart({ name, price }) {
        if (!name || name === '' ) {
            throw new Error('I can\'t do that dave');
        }
        const cartState = (this.state || {}).cart || [];
  
        const newState = cartState.concat([{ name, price}])
        this.setState({ cart: newState });
        this.forceUpdate();
    }

    // state = {
    //     cart: ,
    // }
    // ** ADDING PRODUCTS TO SHOP -- Part 1 return of the jedi **
    // 1. Add array of objects containing product details to SHOP STATE
    // 2. pass array of product detaisl down BLUSH and MINT
    // 3. MAP over array of product details in each details component
    // 4. Details show up on page! Woop. 
    
    // onAddElement() {

    //     this.setState()
    // }
    

    render() {
        debugger;
        return (
            <div>
                <h1>Shop</h1>
                <p>this is the shop page</p>
                <div>
                    <Link to={`${this.props.match.path}/blush`}><button>Blush</button></Link>
                    <Link to={`${this.props.match.path}/turquoise`}><button>Turquoise</button></Link>
                </div>
                <Switch>
                    <Route path={`${this.props.match.path}/blush`} render={ props => { addProductToCart: this.addProductToCart }} component={Blush} />
                    <Route path={`${this.props.match.path}/turquoise`} render={ () => <Turquoise onAddedProduct={this.addProductToCart} /> }/> />
                </Switch>
                <Cart items={(this.state || {}).cart || []} />
            </div>
        )
    }
}

export default Shop;