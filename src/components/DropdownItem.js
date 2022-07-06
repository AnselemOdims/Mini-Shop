import { Component } from 'react';
import styled from 'styled-components';

import CartDetails1 from './CartDetails1';
import CartDetails2 from './CartDetails2';

const StyledItem = styled.li`
  display: grid;
  grid-template-columns:1fr 1fr;
  
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  > div {
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      width: 50%;

      h2, h3 {
        font-weight: 300;
        font-size: 1rem;
        line-height: 160%;
        margin-bottom: 0.4rem;
      }

      h2 {
        margin-bottom: 0.2rem;
      }

      > p {
          margin-bottom: 0.5rem;
          font-weight: 400;

        &:nth-of-type(1) {
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 160%;
          margin-bottom: 0.5rem;
        }

      }

      > div.attr__container {
        display: flex;
        flex-direction: column;

        p {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        div {
          display: flex;
          gap: 0.5rem;

          button {
            border: solid 0.09rem var(--text-color-1);
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            background: transparent;
            padding: 5px 8px;

            &:active, &:focus {
              background: var(--text-color-1);
              color: var(--white)
            }
          
          &.color__btn {
            width: 1rem;
            height: 1rem;
            color: var(--white);
            padding: 0;
            margin-bottom: 0.5rem;

            &:focus {
              border: solid 0.09rem var(--primary-color)
            }
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
            background: transparent;
            font-size: 1.1rem;
            font-weight: 500;
            width: 1.5rem;
            height: 1.5rem;
          }

          span {
            font-weight: 550;
            font-size: 1.2rem
          }
        }

        &:nth-of-type(2) {
            max-height: 190px;
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
    const { data } = this.props;

    return (
      <StyledItem>
        <CartDetails1 data={data} />
        <CartDetails2 data={data} />
      </StyledItem>
    );
  }
}

export default DropdownItem;
