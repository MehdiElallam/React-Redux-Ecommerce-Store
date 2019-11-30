import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ADD_TO_CART
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

export const handleAddToCart = (items, product) => dispatch => {
  const cartItems = items.slice();
  var alreadyIn = false;
  cartItems.forEach(data => {
    if (data.id == product.id) {
      data.quantity++;
      alreadyIn = true;
    }
  });
  if (!alreadyIn) {
    cartItems.push({ ...product, quantity: 1 });
  }
  console.log(cartItems);
  return dispatch({
    type: ADD_TO_CART,
    payload: {
      cartItems: cartItems
    }
  });
};
