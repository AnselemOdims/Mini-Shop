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

      p {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: var(--text-color-1);

        span {
          font-weight: 700;
        }
      }
    }
  }
`;

class Cart extends Component {
  render() {
    const { cart } = this.props;

    const total = cart.reduce((a, b) => a + (b.unitPrice * b.qty), 0);
    const getQty = () => (
      (cart.length > 0 && cart.length === 1) ? cart[0].qty : cart.reduce((a, b) => a + b.qty, 0));

    return (
      <StyledCart>
        <h1>CART</h1>
        <hr />
        {cart.length > 0
          ? (
            <>
              <div>
                { cart.map((item) => (
                  <CartData key={item.id} data={item} />
                ))}
              </div>
              <div>
                <p>
                  Tax 21%:
                  <span>
                    {' '}
                    $
                    {(total * 0.21).toFixed(2)}
                  </span>
                </p>
                <p>
                  Quantity:
                  <span>
                    {' '}
                    {getQty()}
                  </span>
                </p>
                <p>
                  Total:
                  <span>
                    {' '}
                    $
                    {total}
                  </span>
                </p>
                <button type="button">ORDER</button>
              </div>
            </>
          )
          : <h2>No items added to the cart yet</h2>}
      </StyledCart>
    );
  }
}

export default connect(({ cartReducer: { cart } }) => ({ cart }))(Cart);
