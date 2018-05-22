import React, { Component } from 'react';
import './App.css';
import './ProductPage.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ProductPage extends React.Component {
    constructor(state) {
      super(state);
      this.onAddedProduct = state.onAddedProduct;
      this.product = state.product;
      this.productType = state.productType;
    }
//adds product to cart
    render() {
      return (
        <Card className="productPage">
          <CardContent>
            <Typography color="headline">
              {this.productType}
            </Typography>
            <Typography variant="headline" component="h2">
              {this.product.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => this.onAddedProduct(this.product)}>Add to Cart</Button>
          </CardActions>
        </Card>)
    }
}

export { ProductPage };