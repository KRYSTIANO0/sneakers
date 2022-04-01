import { createSlice } from '@reduxjs/toolkit'

const initialLikesState = {
	likes: [],
}

export const likesSlice = createSlice({
	name: 'likes',
	initialState: initialLikesState,
	reducers: {
		checkStoredLikes(state) {
			const data = localStorage.getItem('likes')
			const likes = JSON.parse(data)
			if (likes.length > 0) {
				state.likes = likes
			}
		},
		addHandler(state, action) {
			const isLiked = state.likes.find(like => like._id === action.payload._id)
			if (isLiked) {
				state.likes = state.likes.filter(like => like._id !== action.payload._id)
			} else {
				state.likes.push(action.payload)
			}
			localStorage.setItem('likes', JSON.stringify(state.likes))
		},
	},
})

export const likesActions = likesSlice.actions
