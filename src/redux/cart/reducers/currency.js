import { CURRENCY_CHANGED } from '../actions/cartAction';

const initialState = {
  currencyLabel: 'USD',
  currencySymbol: '$',
};

const currencyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENCY_CHANGED:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default currencyReducer;
