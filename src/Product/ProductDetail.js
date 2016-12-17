import React, { Component } from 'react';
import logo from '../Assets/Images/grab-logo.png';
import './Product.css';

import InlineEdit from 'react-edit-inline';

class ProductDetail extends Component {

  constructor(props){
    super(props); 
    this.dataChanged = this.dataChanged.bind(this);
    this.state = {
      title: 'Self Driving Car',
      message: 'With fully self-driving technology, you’ll be able to get where you want to go at the push of a button without the need for a person at the wheel.'
    }
  }

  dataChanged(data) {
      console.log(data)
      this.setState({
        title: this.state.title,
        message: this.state.message,
      })
  }

  render() {
    return (
      <div className="productDetail">
        <img src="https://www.google.com/selfdrivingcar/images/home-where.jpg" alt="" />
        <h2>
          <InlineEdit
              activeClassName="editing"
              text={this.state.title}
              paramName="title"
              change={this.dataChanged}
              style={{
                backgroundColor: 'yellow',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 24,
                outline: 0,
                border: 0,
              }}
            />
        </h2>
        <InlineEdit
              activeClassName="editing"
              text={this.state.message}
              paramName="message"
              change={this.dataChanged}
              style={{
                backgroundColor: 'yellow',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0,
              }}
            />
        <div className="productAside">
          <ul>
            <li>Price: 4500000 $</li>
            <li>In Stock</li>
          </ul>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
