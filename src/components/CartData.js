import { Component } from 'react';
import styled from 'styled-components';

import CartDetails1 from './CartDetails1';
import CartDetails2 from './CartDetails2';

const StyledCartData = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
    
    hr {
    border: none;
    border-bottom: solid 0.09rem #E5E5E5;
    margin-bottom: 1.5rem;
  }
`;

class CartData extends Component {
  render() {
    return (
      <StyledCartData>
        <div>
          <CartDetails1 />
          <CartDetails2 />
        </div>
        <hr />
      </StyledCartData>
    );
  }
}

export default CartData;
