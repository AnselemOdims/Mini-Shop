import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DropdownItem from './DropdownItem';
import '../assets/styles/transition.scss';
import CheckoutModal from './CheckoutModal';

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
    width: 31%;
    position: fixed;
    top: 5.02rem;
    left: 64%;
    max-height: 60%;
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
          font-weight: 500;

          &:first-of-type {
            font-weight: 700;
          }
        }
      }

      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2.6875rem 0 2.125rem;
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
  constructor(props) {
    super(props);
    this.state = {
      showCheckoutModal: false,
    };
  }

  handleShowModal = (e) => {
    const { showCheckoutModal } = this.state;
    const { handleToggle } = this.props;
    this.setState({ showCheckoutModal: !showCheckoutModal });
    handleToggle(e, false);
  };

  render() {
    const
      {
        show, handleToggle, cart, cartQty,
      } = this.props;
    const { showCheckoutModal } = this.state;
    const total = cart.reduce((a, b) => a + (b?.unitPrice * b?.qty), 0);

    return (
      <Overlay>
        <CSSTransition in={show} timeout={500} classNames="drop" unmountOnExit>
          <div onClick={(e) => handleToggle(e, false)} />
        </CSSTransition>
        <CSSTransition in={show} timeout={500} classNames="drop-node" unmountOnExit>
          <div>
            <div>
              <span>My Bag, </span>
              <span>
                {cartQty || 0}
                item
                {cartQty > 1 && 's'}
              </span>
            </div>
            {cart.length > 0 ? (
              <ul>
                { cart.map((item) => (
                  <DropdownItem key={item?.id} data={item} />
                ))}
              </ul>
            )
              : <p>No items added to the cart yet</p>}
            { cart.length > 0
            && (
            <div>
              <p>Total</p>
              <p>
                {cart[0]?.currencySymbol}
                {total.toFixed(2)}
              </p>
            </div>
            )}
            <div>
              <div onClick={handleToggle}>
                <Link to="/cart">VIEW BAG</Link>
              </div>
              <div>
                <button type="button" onClick={this.handleShowModal}>CHECKOUT</button>
              </div>
            </div>
          </div>
        </CSSTransition>
        <CheckoutModal show={showCheckoutModal} handleShowModal={this.handleShowModal} />
      </Overlay>
    );
  }
}

Dropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default connect((({ cartReducer }) => ({ cart: cartReducer.cart })))(Dropdown);
