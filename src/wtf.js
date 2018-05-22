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

