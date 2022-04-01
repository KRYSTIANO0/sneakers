import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getMenuData = createAsyncThunk('getMenuData', async () => {
	const response = await fetch('http://localhost:3000/api/menu')
	const data = await response.json()
	return { data }
})

const initialMenuState = {
	showMenu: false,
	menuData: null,
	isLoading: false,
}

export const menuSlice = createSlice({
	name: 'menu',
	initialState: initialMenuState,
	reducers: {
		openMenu(state) {
			state.showMenu = true
		},
		closeMenu(state) {
			state.showMenu = false
		},
	},
	extraReducers: {
		[getMenuData.fulfilled](state, action) {
			state.menuData = action.payload.data['message'][0].menu
		},
	},
})

export const menuActions = menuSlice.actions
