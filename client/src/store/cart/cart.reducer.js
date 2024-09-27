import { CART_ACTION_TYPES } from "./cart.types.js";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      let newCartItems;

      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1, {
          ...state.cartItems[itemIndex],
          quantity: state.cartItems[itemIndex].quantity
            ? state.cartItems[itemIndex].quantity + 1
            : 1,
        });
        newCartItems = [...state.cartItems];
      } else {
        newCartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }

      return {
        ...state,
        cartItems: newCartItems,
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      const itemIndexR = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      let newCartItemsR;

      if (state.cartItems[itemIndexR].quantity === 1) {
        state.cartItems.splice(itemIndexR, 1);
        newCartItemsR = [...state.cartItems];
      } else {
        state.cartItems.splice(itemIndexR, 1, {
          ...state.cartItems[itemIndexR],
          quantity: state.cartItems[itemIndexR].quantity
            ? state.cartItems[itemIndexR].quantity - 1
            : 1,
        });
        newCartItemsR = [...state.cartItems];
      }

      return {
        ...state,
        cartItems: newCartItemsR,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
