import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        addToCart: (state, action)=>{
            // console.log(action.payload);
            const exitingProduct = state.find((product)=> product.productId === action.payload.id)

            if(exitingProduct){
                alert('product already exists')
            }else{
                state.push({
                    ...action.payload,
                    id: Date.now(),
                    quantity: 1,
                    productId: action.payload.id,
                })
            }
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;