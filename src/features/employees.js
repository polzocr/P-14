import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const { actions, reducer } = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		saving: (draft, action) => {
			draft.push(action.payload)
		},
	},
})

export const { saving } = actions
export default reducer
