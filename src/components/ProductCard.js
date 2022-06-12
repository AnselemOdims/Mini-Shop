import { Component } from 'react';
import styled from 'styled-components';

import Image from '../assets/images/Image.png';

const StyledCard = styled.article`
 padding: 1rem;
 width: 100%;
 cursor: pointer;

 &:hover {
  box-shadow: 0px 10px 35px rgba(168, 172, 176, 0.19);
 }

 > div {

   img {
     width: 100%;
   }
 }

 h2 {
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 160%;
  margin-top: 1.5rem;
 }

 p {
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 160%;
 }

`;
class ProductCard extends Component {
  render() {
    return (
      <StyledCard>
        <div>
          <img src={Image} alt="product" />
        </div>
        <h2>Apollo Running Short</h2>
        <p>
          $
          <span>{50.00}</span>
        </p>
      </StyledCard>
    );
  }
}

export default ProductCard;
