import * as Actions from '../actions/productActions';
import { CURRENCY_CHANGED } from '../actions/cartAction';

const initialState = {
  all: [],
  tech: [],
  clothes: [],
  product: {},
};

const filterPrices = (product, payload) => {
  const itemPrices = product.prices.filter((item) => item.currency.label === payload.label);
  return {
    ...product,
    unitPrice: itemPrices[0].amount,
    currencySymbol: itemPrices[0].currency.symbol,
  };
};

const handleCurrency = (products, payload) => (
  products.map((product) => filterPrices(product, payload))
);

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ADD_ALL_PRODUCTS:
      return { ...state, all: payload };
    case Actions.ADD_CLOTHES_PRODUCTS:
      return { ...state, clothes: payload };
    case Actions.ADD_TECH_PRODUCTS:
      return { ...state, tech: payload };
    case CURRENCY_CHANGED:
      return {
        ...state,
        all: handleCurrency(state.all, payload),
        tech: handleCurrency(state.tech, payload),
        clothes: handleCurrency(state.clothes, payload),
        product: filterPrices(state.product, payload),
      };
    case Actions.ADD_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
