import { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { CategoryContainer } from './AllCategory';

class Clothes extends Component {
  render() {
    const { clothes } = this.props;

    return (
      <CategoryContainer>
        <h1>Clothes</h1>
        <ProductList data={clothes} />
      </CategoryContainer>
    );
  }
}

export default
connect(({ productReducer: { clothes } }) => ({ clothes }))(Clothes);
