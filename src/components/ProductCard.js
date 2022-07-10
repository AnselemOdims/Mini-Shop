import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../assets/images/cart2.svg';
import { addCart } from '../redux/cart/actions/cartAction';

const StyledCard = styled.article`
 padding: 1rem;
 width: 100%;
 cursor: pointer;
 position: relative;
 height: 444px;

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

  > a {
      div {
      height: 21.125rem;

      img {
        width: 100%;
        height: 100%
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
  }

 > div.out__stock {
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   height: 100%;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   background: #fff;
   opacity: 0.5;

   h3 {
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    color: #8D8F9A;
   }
 }

`;

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      attrs: {},
    };
  }

  handleAddProduct = (e, attr) => {
    e.stopPropagation();
    const { product } = this.props;
    this.props.addCart({ ...product, attr });
  };

  render() {
    const { product } = this.props;
    const { attrs } = this.state;
    return (
      <StyledCard>
        <Link to={`/products/${product.id}`} style={{ pointerEvents: !product.inStock && 'none' }}>
          <div>
            <img src={product.gallery[0]} alt="product" />
          </div>
          <h2>{product.name}</h2>
          <p>
            {product.currencySymbol}
            <span>{product.unitPrice}</span>
          </p>
        </Link>
        {!product.inStock && (
        <div className="out__stock">
          <h3>OUT OF STOCK</h3>
        </div>
        )}
        {product.inStock && (
        <div className="cart-img" onClick={(e) => this.handleAddProduct(e, attrs)}>
          <img src={Cart} alt="cart" />
        </div>
        )}
      </StyledCard>
    );
  }
}

export default connect(null, { addCart })(ProductCard);
