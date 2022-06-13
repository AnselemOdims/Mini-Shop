import { Component } from 'react';
import styled from 'styled-components';

import DropdownItem from './DropdownItem';

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 80px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4); 

  > div {
    width: 27%;
    position: absolute;
    left: 66%;
    height: 500px;
    background: var(--white);
    z-index: -1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem 2rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    > div {

      &:nth-of-type(1) {
        margin: 2rem 0;

        span {
          &:first-of-type {
            font-weight: 600;
          }
        }
      }

      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2rem 0;
        font-weight: 600;
      }

      &:last-of-type {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        button {
          width: 50%;
          padding: 0.8rem;
          border: solid 0.09rem var(--text-color-1);
          background: transparent;
          font-family: var(--font-1);
          font-weight: 600;

          &:last-of-type {
            background: var(--primary-color);
            border: solid 0.09rem var(--primary-color);
            color: var(--white);
          }
        }
      }
    }
  }
`;

class Dropdown extends Component {
  render() {
    return (
      <Overlay>
        <div>
          <div>
            <span>My Bag, </span>
            <span>3 items</span>
          </div>
          <ul>
            <DropdownItem />
            <DropdownItem />
            <DropdownItem />
          </ul>
          <div>
            <p>Total</p>
            <p>$200.00</p>
          </div>
          <div>
            <button type="button">VIEW BAG</button>
            <button type="button">CHECKOUT</button>
          </div>
        </div>
      </Overlay>
    );
  }
}

export default Dropdown;