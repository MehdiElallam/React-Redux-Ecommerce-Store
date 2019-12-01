import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

export const handleAddToCart = (items, product) => dispatch => {
  const cartItems = items.slice();
  var alreadyIn = false;
  cartItems.forEach(data => {
    if (data.id === product.id) {
      data.quantity++;
      alreadyIn = true;
    }
  });
  if (!alreadyIn) {
    cartItems.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return dispatch({
    type: ADD_TO_CART,
    payload: {
      cartItems: cartItems
    }
  });
};

export const deleteItemFromCart = (items, product) => dispatch => {
  const cartItems = items.slice().filter(item => item.id !== product.id);

  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      cartItems
    }
  });
};
