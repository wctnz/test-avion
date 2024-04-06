import { IProduct } from './../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface shopState {
    items: IProduct[]
    isLoading: boolean
    error: string
}

const initialState: shopState = {
    items: JSON.parse(localStorage.getItem("localeItems") ?? "[]"),
    isLoading: false,
    error: ""
}

export const itemsSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        itemsFetching(store) {
            store.isLoading = true
        },
        itemsFetchingSucces(store, action: PayloadAction<IProduct[]>) {
            store.isLoading = false
            store.items = action.payload
            localStorage.setItem("localeItems", JSON.stringify(store.items))
        },
        itemsFetchingError(store, action: PayloadAction<string>) {
            store.isLoading = false
            store.error = action.payload
        },
        plusItem(state, action: PayloadAction<IProduct>) {
            state.items.map(el => {
                if (el.id === action.payload.id) {
                    el.count++
                }
                return el
            })
            localStorage.setItem("localeItems", JSON.stringify(state.items))
        },
        minusItem(state, action: PayloadAction<IProduct>) {
            state.items.map(el => {
                if (el.id === action.payload.id && el.count >= 2) {
                    el.count--
                }
                return el
            })
            localStorage.setItem("localeItems", JSON.stringify(state.items))
        }

    }
})