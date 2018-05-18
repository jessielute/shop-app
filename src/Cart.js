import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'


const Cart = (props) => {
    //cart component renders everything added to cart
    let items = props.items.map((item, i) => {
      return (
        <li key={i}>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </li>
      )
    });
    //displays items in cart
    var body = (<ul>{items}</ul>)
    //displayed only if user has not yet added any items
    var empty = <div>you have not yet added any items.</div>
    return (
      <div>
        <h2>hi im the shopping cart look at me go </h2>
      { items.length > 0 ? body : empty }
      </div>
    )

  };


export default Cart