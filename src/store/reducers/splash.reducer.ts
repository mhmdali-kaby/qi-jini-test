import {createSlice} from '@reduxjs/toolkit';
import {splashInitialState} from "../state/splash.state.ts";
import {getSplashes} from "../actions/splash.actions.ts";

const splashSlice = createSlice({
	name: 'splash',
	initialState: splashInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getSplashes.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getSplashes.fulfilled, (state, action) => {
				state.loading = false;
				state.splashes = action.payload;
			})
			.addCase(getSplashes.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default splashSlice.reducer;