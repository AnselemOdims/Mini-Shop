import { Component } from 'react';
import { connect } from 'react-redux';

import { incrementQuantity } from '../redux/cart/actions/cartAction';

class CartDetails2 extends Component {
  render() {
    const { data, incrementQuantity } = this.props;

    return (
      <div>
        <div>
          <button type="button" onClick={() => incrementQuantity(data.id)}>+</button>
          <span>{data.qty}</span>
          <button type="button">-</button>
        </div>
        <div>
          <img src={data.gallery[0]} alt="product" />
        </div>
      </div>
    );
  }
}

export default connect(null, { incrementQuantity })(CartDetails2);
