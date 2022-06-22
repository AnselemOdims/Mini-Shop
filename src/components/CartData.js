import { Component } from 'react';
import styled from 'styled-components';

import CartDetails1 from './CartDetails1';
import CartDetails2 from './CartDetails2';

const StyledCartData = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    > div {
      &:nth-of-type(1) {
        h2, h3 {
          font-weight: 600;
          font-size: 30px;
          line-height: 27px;
          margin-bottom: 1rem;
        }

        h3 {
          font-weight: 400;
          margin-bottom: 1.25rem;
        }

        > p {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 18px;
          line-height: 18px;
          margin-bottom: 0.4375rem;

          &:nth-of-type(1) {
            font-size: 24px;
            line-height: 24px; 
            margin-bottom: 1.25rem;
          }
        }

        > div {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;

          &:nth-of-type(1) {

            button {
              width: 3.8125rem;
              border: solid 0.09rem var(--text-color-1);
              height: 2.8125rem;
              background: var(--white);
            }
          }

          &:nth-of-type(2) {
            button {
              width: 2.125rem;
              height: 2.125rem;
            }
          }
        }

      }

      &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      width: 12.5rem;
      height: 18rem;

      > div {
        &:nth-of-type(1) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          button {
            border: solid 0.09rem var(--text-color-1);
            width: 2.8125rem;
            height: 2.8125rem;
            background: transparent;
            font-size: 1.6rem;
          }

          span {
            font-weight: 500;
            font-size: 1.5rem
          }
        }

        &:nth-of-type(2) {

          img {
            width: 12.5rem;
            height: 100%; 
          }
        }
      }
    }
    }
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
