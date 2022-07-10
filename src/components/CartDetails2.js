import { Component } from 'react';
import { connect } from 'react-redux';

import { incrementQuantity, decrementQuantity, removeProduct } from '../redux/cart/actions/cartAction';

class CartDetails2 extends Component {
  render() {
    const {
      data, incrementQuantity, decrementQuantity, removeProduct,
    } = this.props;

    const remove = () => {
      if (data.qty - 1 < 1) {
        removeProduct({ id: data.id, attr: data.attr });
      } else {
        decrementQuantity({ id: data.id, attr: data.attr });
      }
    };
    return (
      <div>
        <div>
          <button type="button" onClick={() => incrementQuantity({ id: data.id, attr: data.attr })}>+</button>
          <span>{data.qty}</span>
          <button type="button" onClick={() => remove()}>-</button>
        </div>
        <div>
          <img src={data.gallery[0]} alt="product" />
        </div>
      </div>
    );
  }
}

export default connect(null, { incrementQuantity, decrementQuantity, removeProduct })(CartDetails2);
