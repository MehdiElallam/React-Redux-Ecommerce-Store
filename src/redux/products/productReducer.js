import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ADD_TO_CART
} from "./productTypes";

const initialState = {
  items: [],
  filteredItems: [],
  size: "",
  cartItems: []
};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems
      };
    default:
      return state;
  }
}
