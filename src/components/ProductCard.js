import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import Image from '../assets/images/Image.png';
import Cart from '../assets/images/cart2.svg';

const StyledCard = styled.article`
 padding: 1rem;
 width: 100%;
 cursor: pointer;
 position: relative;

 &:hover {
  box-shadow: 0px 10px 35px rgba(168, 172, 176, 0.19);

  .cart-img {
    display: flex;
  }
 }

 .cart-img {
    display: none;
    position: absolute;
    right: 1.9375rem;
    bottom: 4.5rem;
    background: var(--primary-color);
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    padding: 0.875rem;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
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
    const { product } = this.props;
    return (
      <Link to={`/products/${product.id}`}>
        <StyledCard>
          <div>
            <img src={product.gallery[0]} alt="product" />
          </div>
          <h2>{product.name}</h2>
          <p>
            $
            <span>{product.prices[0].amount}</span>
          </p>
          <div className="cart-img">
            <img src={Cart} alt="cart" />
          </div>
        </StyledCard>
      </Link>
    );
  }
}

export default ProductCard;
