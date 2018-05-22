import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Nav.css';
import { Switch, Link, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StoreIcon from '@material-ui/icons/Store';
import HomeIcon from '@material-ui/icons/Home';

class Nav extends React.Component {
  render() {
      return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className="flex">
            The Blush &amp; Turquoise Shop. 
          </Typography>
          <Link to={`/`}>
            <IconButton color="tertiary" aria-label="Menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to={`/shop`}>
            <IconButton color="teritiary" aria-label="Menu">
              <StoreIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>);
  }
}

export default Nav