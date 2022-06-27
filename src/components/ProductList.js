import { Component } from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';

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
  // componentDidMount() {
  //   const { data } = this.props;
  //   console.log(data);
  // }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <StyledList>
        {data.category.products.map((item) => (
          <li
            key={item.name}
          >
            <ProductCard product={item} />
          </li>
        ))}
      </StyledList>
    );
  }
}

export default ProductList;
