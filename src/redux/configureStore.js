import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import cartReducer from './cart/reducers/cart';
import currencyReducer from './cart/reducers/currency';

// combine one or more reducers
const reducer = combineReducers({
  cartReducer,
  currencyReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
