import {createSlice} from '@reduxjs/toolkit';
import {getAllCategories} from "../actions/categories.actions.ts";
import {categoryInitialState} from "../state/categories.state.ts";

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: categoryInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllCategories.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllCategories.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getAllCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default categoriesSlice.reducer;