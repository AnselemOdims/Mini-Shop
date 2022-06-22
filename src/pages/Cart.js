import { Component } from 'react';
import styled from 'styled-components';

import CartData from '../components/CartData';

const StyledCart = styled.section`
  padding: 9.5rem 6.95% 11.9375rem;
  
  h2 {
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
  }
`;

class Cart extends Component {
  render() {
    return (
      <StyledCart>
        <h2>CART</h2>
        <hr />
        <div>
          <CartData />
          <CartData />
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

export default Cart;
