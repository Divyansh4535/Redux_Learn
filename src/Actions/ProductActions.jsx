import { getProduct } from "../Reducers/ProductReducer";
import axios from "axios";

export const asyncgetProduct = () => async (dispatch, getState) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log('response', response);
        dispatch(getProduct(response.data))
    } catch (error) {
        console.log('error', error);
    }
}