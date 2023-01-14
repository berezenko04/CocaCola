import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    screenWidth: 0
}

export const screenWidthSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setScreenWidth(state, action) {
            state.screenWidth = action.payload;
        }
    }
})

export const { setScreenWidth } = screenWidthSlice.actions; false

export default screenWidthSlice.reducer;