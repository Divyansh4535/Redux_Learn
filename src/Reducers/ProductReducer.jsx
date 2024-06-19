import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProduct: (state, action) => {
            // console.log(action); 
            // axios
            // .get("https://fakestoreapi.com/products")
            // .then((Response) =>{
            //     console.log(Response);
            //     state.Product= Response.data;
            // })
            // .catch((error)=>{
            //     console.error(error);
            // })
            state.products =action.payload
        }
    },
})

export default productSlice.reducer;
export const { getProduct } =productSlice.actions;