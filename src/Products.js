import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'

//products sold in our wonderful store with mind boggling selection
const ProductsList = [
  { 
    name: 'Blush',
    url: 'blush',
    products: [
      {
          name: 'Sexy Blush Shoes', 
          id: 'd9b1fe7b-037d-2302-d85a-9f03843b360e',
          price: ' $55', 
          picture: './../public/imgs/shoe3.png', 
          type: 'shoe'
      },
      {
          name: 'Wonderous Blush Water Bottle', 
          id: '207f3b4d-bd5e-9888-b04b-60f5a0ef66f8',
          price: ' $25', 
          picture: './../public/imgs/shoe3.png', 
          type: 'water bottle'
      },
      {
        name: 'Hip Blush Vape', 
        id: '207f3b4d-bd5e-9888-b04b-60f5a0ef66f8',
        price: ' $125', 
        picture: './../public/imgs/shoe3.png', 
        type: 'vape'
      }
    ]
  },
  { 
    name: 'Turquoise',
    url: 'turquoise',
    products: [
      {
          name: 'Ridiculous Turquoise Shoes', 
          id: 'd9b1fe7b-037d-2302-d85a-9f03843b360e',
          price: ' $75', 
          picture: './public/images/turquoiseshoes.jpg', 
          type: 'shoe'
      },
      {
          name: 'Snazzy Turquoise Water Bottle', 
          id: '207f3b4d-bd5e-9888-b04b-60f5a0ef66f8',
          price: ' $15', 
          picture: './../public/imgs/shoe3.png', 
          type: 'shoe'
      },
      {
        name: 'On-Trend Turquoise Vape', 
        id: '207f3b4d-bd5e-9888-b04b-60f5a0ef66f8',
        price: ' $125', 
        picture: './../public/imgs/shoe3.png', 
        type: 'vape'
      }
    ]
  }
];

async function fetchProductsList() {
  return Promise.resolve(ProductsList);
};

export { ProductsList, fetchProductsList };


