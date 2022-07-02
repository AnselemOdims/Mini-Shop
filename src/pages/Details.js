import { Component } from 'react';
import { withRouter } from 'react-router-class-tools';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import sendRequests from '../Utils/utils';
import { GET_PRODUCT_QUERY } from '../Utils/queries';
import '../assets/styles/transition.scss';
import { addCart } from '../redux/cart/actions/cartAction';

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
        cursor: pointer;
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

      &.attr__container {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;

        div {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 24px;

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
          
          &.color__btn {
            width: 2rem;
            height: 2rem;
            color: var(--white);

            &:focus {
              border: solid 0.09rem var(--primary-color)
            }
          }

          }
        }

      }


      &.price__container {
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

      &.add__btn {
        margin-bottom: 2.5rem;

          button {
            width: 100%;
            padding: 1rem 2rem;
            border: none;
            color: var(--white);
            background: var(--primary-color)
          }
      }

      &.desc {
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 159.96%;
          margin-bottom: 20px
        }

        h3 {
          font-weight: 600;
          margin-bottom: 10px
        }
      }

    }
    }
  }
`;
class Details extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      imgSrc: '',
      attrs: {},
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await sendRequests(GET_PRODUCT_QUERY(id));
    this.setState({ data: res.data });
  }

  handleAddProduct = (attr) => {
    const { data } = this.state;
    this.props.addCart({ ...data.product, attr });
  };

  handleAttrChange = (name, value) => {
    this.setState((prevState) => ({
      ...prevState,
      attrs: {
        ...prevState.attrs,
        [name]: value,
      },
    }));
  }

  render() {
    const { data, imgSrc, attrs } = this.state;
    console.log(attrs);
    return (
      <StyledDetails>
        <div>
          {data && data.product.gallery.map((item) => (
            <img
              key={item}
              src={item}
              alt="product"
              onClick={() => this.setState({ imgSrc: item })}
            />
          ))}
        </div>
        <div>
          <SwitchTransition>
            <CSSTransition
              key={imgSrc}
              timeout={1000}
              classNames="flip"
            >
              <img src={imgSrc || data?.product?.gallery[0]} alt="product" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div>
          <h2>{data?.product.brand}</h2>
          <h3>{data?.product.name}</h3>
          { data?.product.attributes.length > 0 && (
          <div className="attr__container">
            {data?.product?.attributes.map(((attr) => (
              <>
                <p>
                  {attr.name.toUpperCase()}
                  :
                  {' '}
                </p>
                <div>
                  {attr.items.map(({ value }) => (
                    attr.name === 'Color' ? (
                      <button
                        key={value}
                        type="button"
                        style={{ backgroundColor: attrs[attr.name] === value ? 'red' : value }}
                        className="color__btn"
                        aria-label="product color"
                        onClick={() => this.handleAttrChange(attr.name, value)}
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => this.handleAttrChange(attr.name, value)}
                        style={{ backgroundColor: attrs[attr.name] === value && 'red' }}
                      >
                        {value}
                      </button>
                    )
                  ))}
                </div>
              </>
            )))}
          </div>
          )}
          <div className="price__container">
            <p>PRICE: </p>
            <span>
              $
              {data?.product.prices[0].amount}
            </span>
          </div>
          <div className="add__btn">
            <button type="button" onClick={() => this.handleAddProduct(attrs)}>ADD TO CART</button>
          </div>
          <div className="desc" dangerouslySetInnerHTML={{ __html: data?.product.description }} />
        </div>
      </StyledDetails>
    );
  }
}

const ConnectedDetails = connect(null, { addCart })(Details);

export default withRouter(ConnectedDetails);
