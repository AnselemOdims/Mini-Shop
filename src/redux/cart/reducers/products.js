import { GET_PRODUCTS } from '../actions/productActions';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default productReducer;
