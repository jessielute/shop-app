import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'


class Cart extends React.Component {

    renderItem(cartItem, i) {
      return (
        <li key={i}>
          <span>{cartItem.name}</span>
          <span>{cartItem.price}</span>
        </li>
      ); 
    }

    render() {
      if (!this.props.items || !Array.isArray(this.props.items) || this.props.items.length === 0) {
        return  (<div>you have not yet added any items.</div>);
      } else {
        return (<ul>
          {this.props.items.map(this.renderItem)}
        </ul>);
      }
    }


  //   //cart component renders everything added to cart
  //   let items = props.items.map((item, i) => {
  //     return (
  //       <li key={i}>
  //         <span>{item.name}</span>
  //         <span>{item.price}</span>
  //       </li>
  //     )
  //   });
  //   //displays items in cart
  //   var body = (<ul>{items}</ul>)
  //   //displayed only if user has not yet added any items
  //   var empty = <div>you have not yet added any items.</div>
  //   return (
  //     <div>
  //       <h2>hi im the shopping cart look at me go </h2>
  //         { items.length > 0 ? body : empty }
  //     </div>
  //   )

  // };
}


export default Cart