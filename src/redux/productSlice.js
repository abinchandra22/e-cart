import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get("https://dummyjson.com/products")
    // console.log(response.data.products);
    sessionStorage.setItem("allProducts", JSON.stringify(response.data.products))
    return response.data.products
})


const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false
            state.allProducts = []
            state.error = "error"
        })

    }
})
export default productSlice.reducer