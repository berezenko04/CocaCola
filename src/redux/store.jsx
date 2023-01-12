import { configureStore } from '@reduxjs/toolkit'

import page from './slices/pageSlice'

export const store = configureStore({
    reducer: {
        page,

    }
})