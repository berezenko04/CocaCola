import { configureStore } from '@reduxjs/toolkit'

import page from './slices/pageSlice'
import accordeon from './slices/accordeonSlice'
import theme from './slices/themeSlice'
import scroll from './slices/scrollSlice'
import menu from './slices/menuSlice'

export const store = configureStore({
    reducer: {
        page,
        accordeon,
        theme,
        scroll,
        menu
    }
})