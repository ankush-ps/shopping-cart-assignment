import axios from "axios";
import { SET_PRODUCTS } from "./products.constants";
import { API_URL } from "../../constants";

export const fetchProductsThunk = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API_URL}/products`,
    });

    dispatch({
      type: SET_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
