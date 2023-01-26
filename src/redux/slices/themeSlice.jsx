import { createSlice } from "@reduxjs/toolkit"
import { getThemeFromLS } from "../../utils/getThemeFromLS";

const initialState = {
    theme: getThemeFromLS()
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        }
    }
})

export const { setTheme } = themeSlice.actions;


export default themeSlice.reducer;