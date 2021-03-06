import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import ProductPage from './ProductPage.jsx';
import Toy from './Toy.jsx';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Toy />
            <Route exact path='/' component={Landing} />
            <Route path='/account' component={Dashboard} />
            <Route path='/about/' component={About} />
            <Route path='/api/cart' component={Cart} />
            <Route path='/api/products/:id' component={ProductPage} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
