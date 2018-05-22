import React, { Component } from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import { ProductPage } from './ProductPage';
import './ProductCategory.css';

class ProductCategory extends React.Component {
    constructor(state) {
      super(state);

      this.onAddedProduct = state.onAddedProduct;
      this.productList = state.productList;
      this.productType = state.productType;
    }

    renderAllProducts() {
      return this.productList.map((product) => (
        <ProductPage key={product.id} onAddedProduct={this.onAddedProduct} product={product} productType={this.productType} />
      ));
    }

    render() {
      return (
        <div className="flexCategory">
          {this.renderAllProducts()}
        </div>
      );
    }
}

export { ProductCategory };