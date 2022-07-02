import { Component } from 'react';
import { connect } from 'react-redux';

import { incrementQuantity, decrementQuantity } from '../redux/cart/actions/cartAction';

class CartDetails2 extends Component {
  render() {
    const { data, incrementQuantity, decrementQuantity } = this.props;
    console.log(data);
    return (
      <div>
        <div>
          <button type="button" onClick={() => incrementQuantity(data.id)}>+</button>
          <span>{data.qty}</span>
          <button type="button" onClick={() => decrementQuantity(data.id)}>-</button>
        </div>
        <div>
          <img src={data.gallery[0]} alt="product" />
        </div>
      </div>
    );
  }
}

export default connect(null, { incrementQuantity, decrementQuantity })(CartDetails2);
