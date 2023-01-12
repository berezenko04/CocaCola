import { configureStore } from '@reduxjs/toolkit'

import page from './slices/pageSlice'
import accordeon from './slices/accordeonSlice'
import theme from './slices/themeSlice'

export const store = configureStore({
    reducer: {
        page,
        accordeon,
        theme
    }
})