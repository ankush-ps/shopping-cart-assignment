import { CART_ACTION_TYPES } from "./cart.types";

export function addItemToCart(payload) {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    payload,
  };
}
