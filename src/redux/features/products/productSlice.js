import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'shirt',
        category: 'te shirt',
        price: 100,
        image: 'https://mensworld.com.bd/wp-content/uploads/2023/09/FSF-1170.jpg',
        date: '17-08-2025'
    },
    {
        id: 2,
        name: 'shirt',
        category: 'te shirt',
        price: 100,
        image: 'https://mensworld.com.bd/wp-content/uploads/2023/09/FSF-1170.jpg',
        date: '17-08-2025'
    },
    {
        id: 3,
        name: 'shirt',
        category: 'te shirt',
        price: 100,
        image: 'https://mensworld.com.bd/wp-content/uploads/2023/09/FSF-1170.jpg',
        date: '17-08-2025'
    },
]
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action)=>{
            state.push({
                id: state.length > 0 ? state[state.length -1].id : 1,
                ...action.payload
            })
        }
    }
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;