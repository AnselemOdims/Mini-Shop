import * as Actions from '../actions/cartAction';

// declare the initial state
const initialState = {
  cart: [],
  currency: {
    label: 'USD',
    symbol: '$',
  },
};

/**
 * @method calculate - function that handle increment and decrement
 * @param {*} cart - the current state of the cart
 * @param {*} payload - the payload to be sent
 * @returns - a new array of items
 */
const calculate = (cart, payload) => (type) => cart.map((item) => {
  if (item.id === payload && type === 'increment') {
    return {
      ...item,
      qty: item.qty + 1,
    };
  } if (item.id === payload && type === 'decrement') {
    return {
      ...item,
      qty: item.qty - 1,
    };
  }
  return { ...item };
});

/**
 * @method handleAdd - function that handles the add functionality
 * @param {*} cart - the current state of the cart
 * @param {*} payload - the payload to be sent
 * @returns - a new array of items
 */
const handleAdd = (cart, payload) => {
  const addedItem = cart.find((item) => item.id === payload.id);
  const filteredItems = cart.filter((item) => item.id !== payload.id);
  if (addedItem) {
    addedItem.qty += 1;
    return [...filteredItems, addedItem];
  }
  return [
    ...cart,
    {
      ...payload,
      unitPrice: payload.prices[0].amount,
      currencySymbol: payload.prices[0].currency.symbol,
    },
  ];
};

const handleCurrency = (state, payload) => {
  const newCart = state.cart.map((cartItem) => {
    const itemPrices = cartItem.prices.filter((item) => item.currency.label === payload.label);
    return {
      ...cartItem,
      unitPrice: itemPrices[0].amount,
      currencySymbol: payload.symbol,
    };
  });
  return {
    ...state,
    cart: newCart,
    currency: {
      ...state.currency,
      ...payload,
    },
  };
};

// the reducer function for the cart
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.CART_ADDED:
      return { ...state, cart: handleAdd(state.cart, payload) };
    case Actions.QUANTITY_INCREMENTED:
      return { ...state, cart: calculate(state.cart, payload)('increment') };
    case Actions.QUANTITY_DECREMENTED:
      return { ...state, cart: calculate(state.cart, payload)('decrement') };
    case Actions.CURRENCY_CHANGED:
      return { ...handleCurrency(state, payload) };
    default:
      return state;
  }
};

export default cartReducer;
