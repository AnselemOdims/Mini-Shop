import sendRequests from '../../../Utils/utils';
import { PRODUCT_QUERY } from '../../../Utils/queries';

export const GET_PRODUCTS = 'GET_PRODUCTS';

const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const getProductsAsync = (payload) => async (dispatch) => {
  try {
    const res = await sendRequests(PRODUCT_QUERY(payload));
    console.log(res);
    dispatch(getProducts(res.data.category.products));
  } catch (err) {
    console.error(err);
  }
};
