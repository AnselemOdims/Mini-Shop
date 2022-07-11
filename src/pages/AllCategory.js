import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';

export const CategoryContainer = styled.section`
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
    const { all } = this.props;

    return (
      <CategoryContainer>
        <h1>All</h1>
        <ProductList data={all} />
      </CategoryContainer>
    );
  }
}

export default
connect(({ productReducer: { all } }) => ({ all }))(AllCategory);
