import {createSlice} from '@reduxjs/toolkit';
import {
	decrementCartItemCountAction,
	getCartCount,
	getCartItems,
	increaseCartItemCountAction,
	offlineCartItemsInfoAction
} from "../actions/cart.actions.ts";
import {cartInitialState} from "../state/cart.state.ts";

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {
		increaseCartItemCount: increaseCartItemCountAction,
		decrementCartItemCount: decrementCartItemCountAction,
		offlineCartItemsInfo: offlineCartItemsInfoAction,
	},
	extraReducers: (builder) => {
		builder
			// Cart Count
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
			})

			// Cart Items
			.addCase(getCartItems.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCartItems.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(getCartItems.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
				state.offline_count = 0;
			});
	},
});

export const {increaseCartItemCount, decrementCartItemCount, offlineCartItemsInfo} = cartSlice.actions;
export default cartSlice.reducer;