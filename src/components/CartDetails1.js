import { Component } from 'react';

class CartDetails1 extends Component {
  render() {
    return (
      <div>
        <h2>Apollo Running Short</h2>
        <p>$50.00</p>
        <p>Size: </p>
        <div>
          <button type="button">XS</button>
          <button type="button">S</button>
          <button type="button">M</button>
          <button type="button">L</button>
        </div>
        <p>Color: </p>
        <div>
          <button type="button">X</button>
          <button type="button">S</button>
          <button type="button">M</button>
        </div>
      </div>
    );
  }
}

export default CartDetails1;
