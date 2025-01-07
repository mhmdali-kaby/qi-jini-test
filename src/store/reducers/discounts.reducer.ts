import {createSlice} from '@reduxjs/toolkit';
import {discountInitialState} from "../state/discounts.state.ts";
import {getAllDiscounts} from "../actions/discounts.actions.ts";

const discountsSlice = createSlice({
	name: 'discounts',
	initialState: discountInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllDiscounts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllDiscounts.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getAllDiscounts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default discountsSlice.reducer;