import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/types';

interface cartSliceState {
    cart: IProduct[]
}

const initialState: cartSliceState = {
    cart: JSON.parse(localStorage.getItem("cartItems") ?? "[]")
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IProduct>) {
            state.cart.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },
        removeFromCart(state, action: PayloadAction<IProduct>) {
            state.cart = state.cart.filter(el => el.id !== action.payload.id)
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },
        plusItem(state, action: PayloadAction<IProduct>) {
            state.cart.map(el => {
                if (el.id === action.payload.id) {
                    el.count++
                }
                return el
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },
        minusItem(state, action: PayloadAction<IProduct>) {
            state.cart.map(el => {
                if (el.id === action.payload.id && el.count >=2) {
                    el.count--
                }
                return el
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        }
    }
})