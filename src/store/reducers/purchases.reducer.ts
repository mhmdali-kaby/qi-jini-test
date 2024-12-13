import {createSlice} from '@reduxjs/toolkit';
import {getPurchases} from "../actions/purchases.actions.ts";
import {purchasesInitialState} from "../state/purchases.state.ts";

const purchasesSlice = createSlice({
	name: 'purchases',
	initialState: purchasesInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPurchases.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getPurchases.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getPurchases.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default purchasesSlice.reducer;