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
  const compareObj = JSON.stringify(item.attr) === JSON.stringify(payload.attr);
  if ((item.id === payload.id && compareObj) && type === 'increment') {
    return {
      ...item,
      qty: item.qty + 1,
    };
  } if ((item.id === payload.id && compareObj) && type === 'decrement') {
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
  const addedItem = cart.find((item) => (
    (item.id === payload.id) && (JSON.stringify(item.attr) === JSON.stringify(payload.attr))
  ));

  const filteredItems = cart.filter((item) => (
    (item.id !== payload.id)
    || ((item.id === payload.id) && (JSON.stringify(item.attr) !== JSON.stringify(payload.attr)))
  ));

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
    case Actions.REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => (
          (item.id !== payload.id)
          || (JSON.stringify(item.attr) !== JSON.stringify(payload.attr)))),
      };
    case Actions.RESET_STATE:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default cartReducer;
