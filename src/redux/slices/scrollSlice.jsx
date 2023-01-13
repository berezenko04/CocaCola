import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    scrollYOffset: 0
}

export const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollYOffset(state, action) {
            state.scrollYOffset = action.payload;
        }
    }
})

export const { setScrollYOffset } = scrollSlice.actions;

export default scrollSlice.reducer;