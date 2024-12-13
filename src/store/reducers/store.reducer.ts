import {createSlice} from '@reduxjs/toolkit';
import {storeInitialState} from "../state/store.state.ts";
import {getStoreInfo} from "../actions/store.actions.ts";

const storeSlice = createSlice({
	name: 'store',
	initialState: storeInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getStoreInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getStoreInfo.fulfilled, (state, action) => {
				state.loading = false;
				state.info = action.payload;
			})
			.addCase(getStoreInfo.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default storeSlice.reducer;