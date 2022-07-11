import { Component } from 'react';
import styled from 'styled-components';

import arrow from '../assets/images/arrow.svg';

const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  width: 25rem;
  height: 100%;

  .carousel__inner {
    white-space: nowrap;
    transition: transform 0.5s;
    height: 100%;

    .carousel__item {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: #fff;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .carousel__indicators {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      border: none;
      width: 1.5rem;
      height: 1.5rem;
      background: rgba(0, 0, 0, 0.73);
      display: flex;
      align-items: center;
      justify-content: center;

      &:nth-of-type(1) {
        transform: rotate(180deg);
      }
    }
  }
`;

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  updateIndex = (newIndex) => {
    const { data } = this.props;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { data } = this.props;

    return (
      <Carousel>
        <div
          className="carousel__inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {data && data.map((item) => (
            <div key={item} className="carousel__item">
              <img src={item} alt="product" />
            </div>
          ))}
        </div>
        {(data && data.length > 1)
        && (
        <div className="carousel__indicators">
          <button
            type="button"
            onClick={() => this.updateIndex(activeIndex - 1)}
          >
            <img src={arrow} alt="arrow" />
          </button>
          <button
            type="button"
            onClick={() => this.updateIndex(activeIndex + 1)}
          >
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        )}
      </Carousel>
    );
  }
}

export default ImageCarousel;
