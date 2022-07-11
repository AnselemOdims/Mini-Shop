import { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Check from '../assets/images/check.svg';
import { resetState } from '../redux/cart/actions/cartAction';

const StyledModal = styled.div`

> div {
  &:nth-of-type(1) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #7977777a;
  }

  &:nth-of-type(2) {
  position: fixed;
  top: 10rem;
  border-radius: 1px;
  left: 35%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: #fff;
  box-shadow: 0px 10px 35px rgba(168, 172, 176, 0.19);
  border: solid 0.09rem var(--text-color-4);

  > div { 
    &:nth-of-type(1) {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 3.5rem;
      }
    }

    &:nth-of-type(2) {
      a {
        border: none;
        width: 8rem;
        background: var(--primary-color);
        padding: 1rem;
        color: #fff;
      }
    }
  }
}
}
`;

class CheckoutModal extends Component {
  render() {
    const { show, resetState } = this.props;

    return ReactDOM.createPortal(
      <StyledModal>
        <CSSTransition in={show} timeout={500} classNames="fade" unmountOnExit>
          <div />
        </CSSTransition>
        <CSSTransition in={show} timeout={500} classNames="drop-node" unmountOnExit>
          <div>
            <div>
              <img src={Check} alt="sucess" />
            </div>
            <p>Your order has been processed</p>
            <div>
              <Link to="/" onClick={resetState}>Ok, thanks</Link>
            </div>
          </div>
        </CSSTransition>
      </StyledModal>,
      document.body,
    );
  }
}

export default connect(null, { resetState })(CheckoutModal);
