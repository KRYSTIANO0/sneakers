import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
	cart: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		checkStoredCart(state) {
			const data = localStorage.getItem('cart')
			if (data) {
				const cart = JSON.parse(data)
				if (cart) {
					state.cart = cart
				}
			}
		},
		addHandler(state, action) {
			const existingShoe = state.cart.find(cartItem => cartItem._id_cart === action.payload._id_cart)
			const ecistingShoeIndex = state.cart.findIndex(cartItem => cartItem._id_cart === action.payload._id_cart)
			console.log(action.payload._id_cart)
			if (existingShoe) {
				state.cart[ecistingShoeIndex] = { ...existingShoe, quantity: state.cart[ecistingShoeIndex].quantity + 1 }
			} else {
				state.cart.push(action.payload)
			}
			localStorage.setItem('cart', JSON.stringify(state.cart))
		},
		deleteHandler(state, action) {
			state.cart = state.cart.filter(cartItem => cartItem._id_cart !== action.payload)
			localStorage.setItem('cart', JSON.stringify(state.cart))
		},
		onQuantityChange(state, action) {
			const shoeToChange = state.cart.find(cartItem => cartItem._id_cart === action.payload._id_cart)
			const shoeToChangeIndex = state.cart.findIndex(cartItem => cartItem._id_cart === action.payload._id_cart)
			state.cart[shoeToChangeIndex] = { ...shoeToChange, quantity: +action.payload.newQuantity }
			localStorage.setItem('cart', JSON.stringify(state.cart))
		},
	},
})

export const cartActions = cartSlice.actions
