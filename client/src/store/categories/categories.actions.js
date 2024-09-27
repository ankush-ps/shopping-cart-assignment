import axios from "axios";
import { API_URL } from "../../constants";
import { SET_CATEGORIES } from "./categories.types";

export const fetchCategoriesThunk = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API_URL}/categories`,
    });

    dispatch({
      type: SET_CATEGORIES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategories = () => ({
  type: SET_CATEGORIES,
  payload: [],
});
