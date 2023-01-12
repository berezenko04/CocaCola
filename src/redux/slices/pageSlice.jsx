import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPage: 0
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPageId(state, action) {
            state.currentPage = action.payload;
        }
    }
})

export const { setPageId } = pageSlice.actions;

export default pageSlice.reducer;