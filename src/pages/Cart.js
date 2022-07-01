import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CartData from '../components/CartData';

const StyledCart = styled.section`
  padding: 9.5rem 6.95% 11.9375rem;
  
  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 3.4375rem;
  }

  hr {
    border: none;
    border-bottom: solid 0.09rem #E5E5E5;
    margin-bottom: 1.5rem;
  }

  > div {
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;
    }

    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 0.5rem;

      button {
        margin-top: 0.5rem;
        width: 17.4375rem;
        height: 2.6875rem;
        background: var(--primary-color);
        color: var(--white);
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
      }
    }
  }
`;

class Cart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <StyledCart>
        <h1>CART</h1>
        <hr />
        <div>
          { cart.map((item) => (
            <CartData key={item.id} data={item} />
          ))}
        </div>
        <div>
          <p>Tax 21%: $42.00</p>
          <p>Quantity: 3</p>
          <p>Total: $200.00</p>
          <button type="button">ORDER</button>
        </div>
      </StyledCart>
    );
  }
}

export default connect(({ cartReducer: { cart } }) => ({ cart }))(Cart);
