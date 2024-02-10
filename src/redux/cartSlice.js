import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            if (existingProduct) {
                const remainingProduct = state.filter(item => item.id != existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalprice = existingProduct.quantity * existingProduct.price
                state = ([...remainingProduct,existingProduct])
            }
            else{
                state.push({...action.payload,quantity:1,totalprice:action.payload.price})
            }
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer