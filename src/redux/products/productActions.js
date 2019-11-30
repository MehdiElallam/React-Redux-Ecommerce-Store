import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE } from "./productTypes";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const filterProductsBySize = (products, size) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(p => p.availableSizes.indexOf(size) >= 0)
    }
  });
};
