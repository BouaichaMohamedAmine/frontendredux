import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleslice"
import scategoriesReducer from "../features/scategorieslice"
import cartsliceReducer from "../features/cartslice"
import authReducer from "../features/authSlice"

const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storescategories: scategoriesReducer,
        storecart: cartsliceReducer,
        auth:authReducer
    }
})
export default store