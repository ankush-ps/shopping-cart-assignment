import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "./categories/categories.reducer";
import productsReducer from "./products/products.reducer";

const reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
