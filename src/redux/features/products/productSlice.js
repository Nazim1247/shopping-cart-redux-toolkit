import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'shirt',
        category: 'te shirt',
        price: 100,
        image: 'https://www.daraz.com.bd/products/-i376122202.html?spm=a2a0e.searchlistcategory.list.9.426717f1CNui8Z',
        date: '17-08-2025'
    },
    {
        id: 2,
        name: 'shirt',
        category: 'te shirt',
        price: 100,
        image: 'https://www.daraz.com.bd/products/-i376122202.html?spm=a2a0e.searchlistcategory.list.9.426717f1CNui8Z',
        date: '17-08-2025'
    },
    {
        id: 3,
        name: 'shirt',
        category: 'te shirt',
        price: 100,
        image: 'https://www.daraz.com.bd/products/-i376122202.html?spm=a2a0e.searchlistcategory.list.9.426717f1CNui8Z',
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