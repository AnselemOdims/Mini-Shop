import * as Actions from '../actions/cartAction';

// declare the initial state
const initialState = { cart: [] };

// the reducer function for the cart
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.CART_ADDED:
      return { cart: [...state.cart, payload] };
    default:
      return state;
  }
};

export default cartReducer;
