import { Component } from 'react';
// import styled from 'styled-components';

import ProductList from '../components/ProductList';
import { PRODUCT_QUERY } from '../Utils/queries';
import sendRequests from '../Utils/utils';
import { CategoryContainer } from './AllCategory';

class Tech extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const res = await sendRequests(PRODUCT_QUERY('tech'));
    this.setState({ data: res.data, loading: false });
  }

  render() {
    const { data, loading } = this.state;
    return (
      <CategoryContainer>
        <h1>Tech</h1>
        {!loading && <ProductList data={data} /> }
      </CategoryContainer>
    );
  }
}

export default Tech;
