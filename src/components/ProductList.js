import { Component } from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';
import SuccessModal from './SuccessModal';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6.4375rem 2.5rem;
  max-width: 1238px;
  width: 100%;

  li {
    list-style: none
  }
`;

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleShowModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;
    const { data } = this.props;
    return (
      <StyledList>
        {data && data.map((item) => (
          <li
            key={item.name}
          >
            <ProductCard product={item} handleShowModal={this.handleShowModal} />
          </li>
        ))}
        <SuccessModal show={showModal} handleShowModal={this.handleShowModal} />
      </StyledList>
    );
  }
}

export default ProductList;
