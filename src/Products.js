import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'


const ProductsList = [
    {
        name: 'High Top Sneaker', 
        id: 'd9b1fe7b-037d-2302-d85a-9f03843b360e',
        price: 15, 
        picture: './../public/imgs/shoe3.png', 
        type: 'shoe'
    },
    {
        name: 'Sneakers', 
        id: '207f3b4d-bd5e-9888-b04b-60f5a0ef66f8',
        price: 15, 
        picture: './../public/imgs/shoe3.png', 
        type: 'shoe'
    }
];




async function fetchProductsList() {
  return Promise.resolve(ProductsList);
};

export { ProductsList, fetchProductsList };