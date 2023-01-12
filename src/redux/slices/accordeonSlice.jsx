import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAccordeonOpened: true,
    accordeonId: -1
}

export const accordeonSlice = createSlice({
    name: 'accordeon',
    initialState,
    reducers: {
        setAccordeonOpened(state, action) {
            state.isAccordeonOpened = action.payload;
        },
        setAccordeonId(state, action) {
            state.accordeonId = action.payload;
        }
    }
})

export const { setAccordeonOpened, setAccordeonId } = accordeonSlice.actions;

export default accordeonSlice.reducer;