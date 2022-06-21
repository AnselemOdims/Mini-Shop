import { Component } from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';

const CategoryContainer = styled.section`
  padding: 0 6.3125rem 11.9375rem;

   > h1 {
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    margin: 5rem 0 6.4375rem;
    padding-top: 5rem;
   }
`;

class AllCategory extends Component {
  render() {
    return (
      <CategoryContainer>
        <h1>All</h1>
        <ProductList />
      </CategoryContainer>
    );
  }
}

export default AllCategory;
