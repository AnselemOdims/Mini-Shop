import * as Actions from '../actions/cartAction';

// declare the initial state
const initialState = { cart: [] };

const increment = (cart, payload) => cart.map((item) => {
  if (item.id === payload) {
    return {
      ...item,
      qty: item.qty + 1,
    };
  }
  return { ...item };
});

const checkAdd = (cart, payload) => {
  const addedItem = cart.find((item) => item.id === payload.id);
  const filteredItems = cart.filter((item) => item.id !== payload.id);
  if (addedItem) {
    addedItem.qty += 1;
    return [...filteredItems, addedItem];
  }
  return [...cart, payload];
};

// the reducer function for the cart
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.CART_ADDED:
      return { cart: checkAdd(state.cart, payload) };
    case Actions.QUANTITY_INCREMENTED:
      return { cart: increment(state.cart, payload) };
    default:
      return state;
  }
};

export default cartReducer;
