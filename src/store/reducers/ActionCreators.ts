import { itemsSlice } from './itemsSlice';
import { AppDispatch } from './../index';

export const fetchItems = () => (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.itemsFetching())
    try {
        fetch("http://localhost:3000/db.json")
            .then(response => response.json())
            .then(data => dispatch(itemsSlice.actions.itemsFetchingSucces(data)))
    } catch (e) {
        dispatch(itemsSlice.actions.itemsFetchingError("Что-то пошло не так!"))
    }
}