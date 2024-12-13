import {createSlice} from '@reduxjs/toolkit';
import {getCartCount} from "../actions/cart.actions.ts";
import {cartInitialState} from "../state/cart.state.ts";

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCartCount.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCartCount.fulfilled, (state, action) => {
				state.loading = false;
				state.count = action.payload?.count ?? 0;
			})
			.addCase(getCartCount.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default cartSlice.reducer;