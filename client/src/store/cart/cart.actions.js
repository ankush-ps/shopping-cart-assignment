import { CART_ACTION_TYPES } from "./cart.types";

export function addItemToCart(payload) {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    payload,
  };
}

export function removeItemFromCart(payload) {
  return {
    type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    payload,
  };
}
