import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  top: 10rem;
  border: solid 1px red;
  padding: 20px;
`;

const SuccessModal = () => ReactDOM.createPortal(
  <StyledModal>
    <p>Item has been successfully added to cart</p>
  </StyledModal>,
  document.body,
);

export default SuccessModal;
