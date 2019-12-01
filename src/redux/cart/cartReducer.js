import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const initialState = {
  cartItems: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems
      };
    default:
      return state;
  }
}
