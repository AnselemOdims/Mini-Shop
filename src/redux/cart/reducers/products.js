import * as Actions from '../actions/productActions';
import { CURRENCY_CHANGED } from '../actions/cartAction';

const initialState = {
  all: [],
  tech: [],
  clothes: [],
};

const handleCurrency = (products, payload) => products.map((product) => {
  const itemPrices = product.prices.filter((item) => item.currency.label === payload.label);
  return {
    ...product,
    unitPrice: itemPrices[0].amount,
    currencySymbol: payload.symbol,
  };
});

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
        all: handleCurrency(state.all, payload),
        tech: handleCurrency(state.tech, payload),
        clothes: handleCurrency(state.clothes, payload),
      };
    default:
      return state;
  }
};

export default productReducer;
