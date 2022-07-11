import { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledModal = styled.div`
  position: fixed;
  top: 5.3rem;
  border-radius: 1px;
  left: 32%;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 10px 35px rgba(168, 172, 176, 0.19);
  border-top: solid 0.15rem var(--primary-color);
  display: flex;
  align-items: center;
  gap: 3rem;

  span {
    font-weight: 700;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;

class SuccessModal extends Component {
  render() {
    const { show, handleShowModal } = this.props;
    return ReactDOM.createPortal(
      <CSSTransition in={show} timeout={500} classNames="drop-node" unmountOnExit>
        <StyledModal>
          <p>Item has been successfully added to cart</p>
          <span onClick={handleShowModal}>x</span>
        </StyledModal>
      </CSSTransition>,
      document.body,
    );
  }
}

export default SuccessModal;
