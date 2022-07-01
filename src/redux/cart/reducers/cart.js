import * as Actions from '../actions/cartAction';

// declare the initial state
const initialState = { cart: [] };

const increment = (state, payload) => state.map((item) => {
  if (item.id === payload) {
    return {
      ...item,
      qty: item.qty + 1,
    };
  }
  return {
    ...item,
  };
});

// the reducer function for the cart
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.CART_ADDED:
      return { cart: [...state.cart, payload] };
    case Actions.QUANTITY_INCREMENTED:
      return { cart: increment(state.cart, payload) };
    default:
      return state;
  }
};

export default cartReducer;
