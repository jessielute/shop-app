//index page?
export { default as shopPage } from './shopPage.js'
export { default as homePage } from './homePage.js'

//why isnt this workingggg
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        page: 'HOME'
      }
      this.goTo = this.goTo.bind(this);
    }
    goTo(shop) {
      this.setState({
        page: "SHOP"
      })
    }
    render() {
      let content
      if (this.state.page === 'HOME') {
        content = <homePage />
      } else if (this.state.page === 'SHOP') {
        content = <shopPage />
      }
      return (
        <div>
            <button onClick={() => {this.goTo('HOME')}}>HOME</button>
            <button onClick={() => {this.goTo('SHOP')}}>SHOP</button>
          {content}
        </div>
      )
    }
  }

  //// all of app.js before i fuck it up again

  import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import Shop from './Shop';
import Home from './Home';

class Template extends React.Component {
  render() {
      return (
          <div>
              <button>HOME</button>
              <button>SHOP</button>
              <Home />
          </div>
      )
  }
}

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        page: 'HOME'
      }
    
      this.goToHome = this.goToHome.bind(this);
      this.goToShop = this.goToShop.bind(this);
    }
    goToHome() {
      this.setState({
        page: 'HOME'
      })
    }
    goToShop() {
      this.setState({
        page: 'SHOP'
      })
    }
    render() {
      let content
      if (this.state.page === 'HOME') {
        content = <Home />
      } else if (this.state.page === 'SHOP') {
        content = <Shop />
      }
      return (
        <div>
          <div>
            <button onClick={this.goToHome}>HOME</button>
            <button onClick={this.goToShop}>SHOP</button>
          </div>
          {content}
        </div>
      )
    }
  }
      

//ReactDOM.render(<App />, document.getElementById('app'))
      

export default App;

//first home component
class App extends React.Component {
  render() {
      return (
          <div>
              <Link to="/"><button>HOME</button></Link>
              <Link to='/shop'><button>SHOP</button></Link>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/shop" component={Shop} />
              </Switch>
          </div>
      )
  }
}

/////
//function to add items to cart
addItem: function (e, item) {
  this.state.items.push(item);
  this.countTotal();
}

//function to remove item from cart that doesnt work yet
//   removeItem: function (e, itemId) {
//     var itemindex;
//     this.state.items.some(function (item, index) {
//       if (item.id == itemId) {
//         itemindex = index;
//         return. true;
//       }
//     })
//     if (typeof itemId) != 'undefined'){
//       this.state.items.splice(itemindex, 1); 
// } 
// },
countTotal: function () {
  var total = 0;
    this.state.items.forEach(function (item, index) {
    total = total + item.price;
  });
  this.setState({ total: total })
},

///old shop pg

import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import App from './App';
import turquoise from './Turquoise';
import Blush from './Blush';
import Cart from './Cart'
import { Products } from './Products';

class Shop extends React.Component {

    createProduct({ name, price }) {
        return { name, price };
    }
    
    addProductToCart({ name, price }) {
        if (!name || name === '' ) {
            throw new Error('I\'m afraid I can\'t do that, Dave.');
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