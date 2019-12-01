import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_PRICE
} from "./productTypes";

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
          : products.filter(p => p.availableSizes.indexOf(size) > -1)
    }
  });
};

export const handleChangeSort = (products, sort) => dispatch => {
  const filteredProducts = products.slice();
  if (sort !== "") {
    filteredProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    filteredProducts.sort((a, b) => (a.id < b.id ? 1 : -1));
  }

  return dispatch({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: {
      sort,
      items: filteredProducts
    }
  });
};
