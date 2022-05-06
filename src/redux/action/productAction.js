import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SECCESS,
  GET_PRODUCT_FAIL,
} from "../constants/productConstants";
import axios from "axios";


export const ProductAction =()=> async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const { data } = await axios.get("http://localhost:8080/zandu");
    // console.log(data,"data action se aara h")
    dispatch({ type: GET_PRODUCT_SECCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// export const BrandAction =()=> async (dispatch) => {
//   try {
//     dispatch({ type: GET_PRODUCT_REQUEST });
//     const { data } = await axios.get("http://localhost:8080/BRANDS");
//     console.log(data,"data action brands se aara h")
//     dispatch({ type: GET_PRODUCT_SECCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: GET_PRODUCT_FAIL,
//       payload:
//         error.data && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };


export const ProductFormAction =()=> async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const { data } = await axios.get("http://localhost:8080/PRODUCTFORM");
    console.log(data,"data action brands se aara h")
    dispatch({ type: GET_PRODUCT_SECCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UsesAction =()=> async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const { data } = await axios.get("http://localhost:8080/USES");
    console.log(data,"data action brands se aara h")
    dispatch({ type: GET_PRODUCT_SECCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
