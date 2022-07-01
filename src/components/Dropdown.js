import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import DropdownItem from './DropdownItem';
import '../assets/styles/transition.scss';

const Overlay = styled.div`

> div {
  &:nth-of-type(1) {
      position: fixed;
      z-index: 10;
      left: 0;
      top: 5rem;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4); 

    }

    &:nth-of-type(2) {
    width: 27%;
    position: absolute;
    left: 66%;
    height: 37.5rem;
    background: var(--white);
    z-index: 10;
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
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        > div {
          width: 50%;

          &:first-of-type {
            padding: 0.8rem;
            border: solid 0.09rem var(--text-color-1);
            background: transparent;
            font-family: var(--font-1);
            font-weight: 600;
            text-align: center;
          }
        }

        button {
          width: 100%;
          padding: 0.9rem;
          border: solid 0.09rem var(--text-color-1);
          background: transparent;
          font-family: var(--font-1);
          font-weight: 600;

          &:not(a):last-of-type {
            background: var(--primary-color);
            border: solid 0.09rem var(--primary-color);
            color: var(--white);
          }
        }
      }
    }
  }
  }
`;

class Dropdown extends Component {
  render() {
    const { show, handleToggle } = this.props;

    return (
      <Overlay>
        <CSSTransition in={show} timeout={500} classNames="drop" unmountOnExit>
          <div onClick={handleToggle} />
        </CSSTransition>
        <CSSTransition in={show} timeout={500} classNames="drop-node" unmountOnExit>
          <div>
            <div>
              <span>My Bag, </span>
              <span>3 items</span>
            </div>
            <ul>
              {/* <DropdownItem />
              <DropdownItem />
              <DropdownItem /> */}
            </ul>
            <div>
              <p>Total</p>
              <p>$200.00</p>
            </div>
            <div>
              <div onClick={handleToggle}>
                <Link to="/cart">VIEW BAG</Link>
              </div>
              <div>
                <button type="button">CHECKOUT</button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </Overlay>
    );
  }
}

Dropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Dropdown;
