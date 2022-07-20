import { SET_CATEGORIES } from "./categories.types";

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return [...action.payload.filter((category) => category.enabled).sort((a, b) => a.order - b.order)];
    default:
      return state;
  }
};

export default categoryReducer;
