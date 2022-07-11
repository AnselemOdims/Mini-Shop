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

        > div.attr__container {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;

        div {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 24px;

          button {
            width: 3.93rem;
            height: 2.8125rem;
            border: solid 0.09rem var(--text-color-1);
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.125rem;
            letter-spacing: 0.05em;
            background: transparent;

            &:active, &:focus {
              background: var(--text-color-1);
              color: var(--white)
            }
          
          &.color__btn {
            width: 2rem;
            height: 2rem;
            color: var(--white);

            &:focus {
              border: solid 0.09rem var(--primary-color)
            }
          }

          }

        }
        p {
          margin-bottom: 0.5rem;
        }

      }

      }

      &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      width: 17rem;
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
    const { data } = this.props;

    return (
      <StyledCartData>
        <div>
          <CartDetails1 data={data} />
          <CartDetails2 data={data} carousel />
        </div>
        <hr />
      </StyledCartData>
    );
  }
}

export default CartData;
