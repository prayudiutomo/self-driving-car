import React, { Component } from 'react';
import logo from '../Assets/Images/grab-logo.png';
import ProductDetail from './ProductDetail';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <ProductDetail/>
        <ProductDetail/>
        <ProductDetail/>
        <ProductDetail/>
        <ProductDetail/>
        <ProductDetail/>
      </div>
    );
  }
}

export default Product;
