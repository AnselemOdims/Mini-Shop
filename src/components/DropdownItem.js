import { Component } from 'react';
import styled from 'styled-components';

import CartDetails1 from './CartDetails1';
import CartDetails2 from './CartDetails2';

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > div {
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      width: 50%;

      h2 {
        font-weight: 300;
        font-size: 1rem;
        line-height: 160%;
        margin-bottom: 0.7rem;
      }

      > p {
          margin-bottom: 0.5rem;
          font-weight: 350;

        &:nth-of-type(1) {
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 160%;
          margin-bottom: 0.7rem;
        }

      }

      > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:nth-of-type(1) {
          margin-bottom: 0.6rem;

          button {
            border: solid 0.09rem var(--text-color-1);
            padding: 0.5rem;
            background: transparent;
            font-size: 0.7rem;

            &:focus {
              background: var(--text-color-1);
              color: var(--white);
            }
          }
        }

        &:nth-of-type(2) {

          button {
            border: none;
            padding: 0.4rem;
            background: var(--text-color-3);
            color: var(--white);
            border: solid 0.09rem transparent;

            &:nth-of-type(2) {
              background: var(--primary-color);
            }

            &:nth-of-type(3) {
              background: var(--text-color-1);
            }

            &:focus {
              border: solid 0.09rem var(--primary-color);
            }
          }
        }
      }
    }

    &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      width: 60%;
      gap: 0.5rem;

      > div {
        &:nth-of-type(1) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          button {
            border: solid 0.09rem var(--text-color-1);
            padding: 0.2rem 0.5rem;
            background: transparent;
            font-size: 0.9rem;
          }

          span {
            font-weight: 550;
            font-size: 1.2rem
          }
        }

        &:nth-of-type(2) {
            width: 100%;

          img {
            width: 100%;
            height: 100%
          }
        }
      }
    }
  }
`;

class DropdownItem extends Component {
  render() {
    return (
      <StyledItem>
        <CartDetails1 />
        <CartDetails2 />
      </StyledItem>
    );
  }
}

export default DropdownItem;
