import sendRequests from '../../../Utils/utils';
import { PRODUCT_QUERY, GET_PRODUCT_QUERY } from '../../../Utils/queries';

export const ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS';
export const ADD_TECH_PRODUCTS = 'ADD_TECH_PRODUCTS';
export const ADD_CLOTHES_PRODUCTS = 'ADD_CLOTHES_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

const addAll = (payload) => ({
  type: ADD_ALL_PRODUCTS,
  payload,
});

const addTech = (payload) => ({
  type: ADD_TECH_PRODUCTS,
  payload,
});

const addClothes = (payload) => ({
  type: ADD_CLOTHES_PRODUCTS,
  payload,
});

const addPrices = (res) => res.data.category.products.map((product) => ({
  ...product,
  unitPrice: product.prices[0].amount,
  currencySymbol: product.prices[0].currency.symbol,
}));

const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const getProductsAsync = () => async (dispatch) => {
  try {
    const allRes = await sendRequests(PRODUCT_QUERY('all'));
    const clothesRes = await sendRequests(PRODUCT_QUERY('clothes'));
    const techRes = await sendRequests(PRODUCT_QUERY('tech'));

    dispatch(addAll(addPrices(allRes)));
    dispatch(addTech(addPrices(techRes)));
    dispatch(addClothes(addPrices(clothesRes)));
  } catch (err) {
    throw new Error(err);
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const res = await sendRequests(GET_PRODUCT_QUERY(id));
    const { data: { product } } = res;
    const data = {
      ...product,
      unitPrice: product.prices[0].amount,
      currencySymbol: product.prices[0].currency.symbol,
    };

    dispatch(addProduct(data));
  } catch (err) {
    throw new Error(err);
  }
};
