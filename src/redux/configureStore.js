import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import cartReducer from './cart/reducers/cart';
import productReducer from './cart/reducers/products';

// combine one or more reducers
const reducer = combineReducers({
  cartReducer,
  productReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
