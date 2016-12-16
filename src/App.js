import React, { Component } from 'react';
import Header from './Common/Header';
import Product from './Product/Product';
import Footer from './Common/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Product/>
        <Footer/>
      </div>
    );
  }
}

export default App;
