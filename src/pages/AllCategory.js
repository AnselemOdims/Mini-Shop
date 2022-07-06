import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { PRODUCT_QUERY } from '../Utils/queries';
import sendRequests from '../Utils/utils';
import { getProductsAsync } from '../redux/cart/actions/productActions';

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
  // constructor() {
  //   super();
  //   this.state = {
  //     data: null,
  //     loading: true,
  //   };
  // }

  async componentDidMount() {
    const { getProductsAsync } = this.props;
    await getProductsAsync('all');
  }

  render() {
    // const { data, loading } = this.state;
    const { products } = this.props;
    console.log(products);
    return (
      <CategoryContainer>
        <h1>All</h1>
        <ProductList data={products} />
      </CategoryContainer>
    );
  }
}

// export default AllCategory;
export default connect(({ productReducer: { products } }) => ({ products }), { getProductsAsync })(AllCategory);
