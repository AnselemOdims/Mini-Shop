import { Component } from 'react';
import { withRouter } from 'react-router-class-tools';
import styled from 'styled-components';

import Image from '../assets/images/Image.png';

const StyledDetails = styled.section`
  padding: 9.5rem 15.21% 11.9375rem 6.72%;
  display: flex;

  > div {
    &:nth-of-type(1),
    &:nth-of-type(3) {
      display: flex;
      flex-direction: column
    }

    &:nth-of-type(1) {
      margin-right: 2.5rem;
      width: 7.03%;
      gap: 2.03rem;

      img {
        width: 5rem;
        height: 5rem;
      }
    }

    &:nth-of-type(2) {
      margin-right: 5.25rem;
      img {
        width: 38.125rem;
        height: 31.9375rem
      }
    }

    &:nth-of-type(3) {
      color: var(--text-color-1);

      > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 159.96%;
      }

      h2 {
        font-weight: 600;
        font-size: 30px;
        line-height: 27px;
        margin-bottom: 1rem;
      }

      h3 {
        font-weight: 400;
        font-size: 30px;
        line-height: 27px; 
        margin-bottom: 2.6875rem 
      }

      > div {
        p {
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 0.5rem;
      }

      &:nth-of-type(1) {
        margin-bottom: 1.5rem;

        div {
          display: flex;
          gap: 0.75rem;

          button {
            width: 3.93rem;
            height: 2.8125rem;
            border: solid 0.09rem var(--text-color-1);
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.125rem;
            letter-spacing: 0.05em;
            background: transparent;

            &:active, &:focus {
              background: var(--text-color-1);
              color: var(--white)
            }
          }
        }

      }

      &:nth-of-type(2) {
        margin-bottom: 2.25rem;

        div {
          display: flex;
          gap: 0.625rem;

          button {
            width: 2rem;
            height: 2rem;
            color: var(--white);

            &:nth-of-type(1) {
              background: #D3D2D5;
            }

            &:nth-of-type(2) {
              background: #2B2B2B;
            }
            
            &:nth-of-type(3) {
              background: #0F6450;
            }

            &:focus {
              border: solid 0.09rem var(--primary-color)
            }
          }
        }
      }

      &:nth-of-type(3) {
        margin-bottom: 1.25rem;

        p {
          margin-bottom: 0.625rem;
        }
        span {
          font-weight: 700;
          font-size: 24px;
          line-height: 18px;
        }
      }

      &:nth-of-type(4) {
        margin-bottom: 2.5rem;

          button {
            width: 100%;
            padding: 1rem 2rem;
            border: none;
            color: var(--white);
            background: var(--primary-color)
          }
      }

    }
    }
  }
`;
class Details extends Component {
  componentDidMount() {
    // const { id } = this.props.match.params;
    // console.log(this.props.history);
  }

  render() {
    return (
      <StyledDetails>
        <div>
          <img src={Image} alt="product" />
          <img src={Image} alt="product" />
          <img src={Image} alt="product" />
        </div>
        <div>
          <img src={Image} alt="product" />
        </div>
        <div>
          <h2>Apollo</h2>
          <h3>Running Short</h3>
          <div>
            <p>SIZE: </p>
            <div>
              <button type="button">XS</button>
              <button type="button">S</button>
              <button type="button">M</button>
              <button type="button">L</button>
            </div>
          </div>
          <div>
            <p>COLOR: </p>
            <div>
              <button type="button">X</button>
              <button type="button">S</button>
              <button type="button">M</button>
            </div>
          </div>
          <div>
            <p>PRICE: </p>
            <span>$50.00</span>
          </div>
          <div>
            <button type="button">ADD TO CART</button>
          </div>
          <p>
            Find stunning women&#39;s cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </StyledDetails>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default DetailsWithRouter;
