import { Component } from 'react';
import styled from 'styled-components';
// import { Query } from 'react-apollo';

import ProductList from '../components/ProductList';
import { PRODUCT_QUERY } from '../Utils/queries';
import sendRequests from '../Utils/utils';

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
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const res = await sendRequests(PRODUCT_QUERY('all'));
    this.setState({ data: res.data, loading: false });
  }

  render() {
    const { data, loading } = this.state;
    return (
      <CategoryContainer>
        <h1>All</h1>
        {!loading && <ProductList data={data} /> }
      </CategoryContainer>
    );
  }
}

export default AllCategory;
