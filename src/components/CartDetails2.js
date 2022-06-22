import { Component } from 'react';

import Image from '../assets/images/Image.png';

class CartDetails2 extends Component {
  render() {
    return (
      <div>
        <div>
          <button type="button">+</button>
          <span>{1}</span>
          <button type="button">-</button>
        </div>
        <div>
          <img src={Image} alt="product" />
        </div>
      </div>
    );
  }
}

export default CartDetails2;
