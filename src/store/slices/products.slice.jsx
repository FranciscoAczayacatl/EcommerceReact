import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
      setProduct: (state, action) => {
        return action.payload;
      }
    }
})

export const getProductThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
  .get('https://e-commerce-api.academlo.tech/api/v1/products')
  .then((res) => dispatch(setProduct(res.data.data.products)))
  .finally(() => dispatch(setIsLoading(false)));
} ;

export const filterProductThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then((res) => dispatch(setProduct(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterInputThunk = (inputSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`)
        .then((res) => dispatch(setProduct(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setProduct } = productsSlice.actions;

export default productsSlice.reducer;
