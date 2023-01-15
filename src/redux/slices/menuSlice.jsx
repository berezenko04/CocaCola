import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isMenuOpened: false
}


export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setIsMenuOpened(state, action) {
            state.isMenuOpened = action.payload;
        }
    }
})

export const { setIsMenuOpened } = menuSlice.actions;

export default menuSlice.reducer;