import { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { CategoryContainer } from './AllCategory';

class Tech extends Component {
  render() {
    const { tech } = this.props;

    return (
      <CategoryContainer>
        <h1>Tech</h1>
        <ProductList data={tech} />
      </CategoryContainer>
    );
  }
}

export default
connect(({ productReducer: { tech } }) => ({ tech }))(Tech);
