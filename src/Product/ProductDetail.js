import React, { Component } from 'react';
import logo from '../Assets/Images/grab-logo.png';
import './Product.css';

class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetail">
        <img src="https://www.google.com/selfdrivingcar/images/home-where.jpg" alt="" />
        <h2>Self Driving Car</h2>
        <p>With fully self-driving technology, you’ll be able to get where you want to go at the push of a button without the need for a person at the wheel.</p>
        <div className="productAside">
          <ul>
            <li>Price: 4500 €</li>
            <li>In Stock</li>
          </ul>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
