import { configureStore } from '@reduxjs/toolkit'
//slices
import { menuSlice } from './slices/menuSlice'
import { likesSlice } from './slices/likesSlice'
import { cartSlice } from './slices/cartSlice'

const store = configureStore({
	reducer: {
		menu: menuSlice.reducer,
		likes: likesSlice.reducer,
		cart: cartSlice.reducer,
	},
})

export default store
