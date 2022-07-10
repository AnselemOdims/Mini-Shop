// Action Types
export const CART_ADDED = 'shoppingfy/cart/CART_ADDED';
export const QUANTITY_INCREMENTED = 'shoppingfy/cart/QUANTITY_INCREMENTED';
export const QUANTITY_DECREMENTED = 'shoppingfy/cart/QUANTITY_DECREMENTED';
export const ATTRIBUTE_CHANGED = 'shoppingfy/cart/ATTRIBUTE_CHANGED';
export const CURRENCY_CHANGED = 'shoppingfy/cart/CURRENCY_CHANGED';
export const UNIT_PRICE_CHANGED = 'shoppingfy/cart/UNIT_PRICE_CHANGED';
export const REMOVE_PRODUCT = 'shoppingfy/cart/REMOVE_PRODUCT';

// addCart action creator
export const addCart = (payload) => ({
  type: CART_ADDED,
  payload: { ...payload, qty: 1 },
});

// incrementQuantity action creator
export const incrementQuantity = (payload) => ({
  type: QUANTITY_INCREMENTED,
  payload,
});

// decrementQuantity action creator
export const decrementQuantity = (payload) => ({
  type: QUANTITY_DECREMENTED,
  payload,
});

// changeAttribute action creator
export const changeAttribute = (payload) => ({
  type: ATTRIBUTE_CHANGED,
  payload,
});

// changeCurrency action creator
export const changeCurrency = (payload) => ({
  type: CURRENCY_CHANGED,
  payload,
});

// unitPrice change action creator
export const changeUnitPrice = (payload) => ({
  type: UNIT_PRICE_CHANGED,
  payload,
});

export const removeProduct = (payload) => ({
  type: REMOVE_PRODUCT,
  payload,
});
