import {createSlice} from '@reduxjs/toolkit';
import {getOrder, getOrders} from "../actions/orders.actions.ts";
import {ordersInitialState} from "../state/orders.state.ts";

const ordersSlice = createSlice({
	name: 'orders',
	initialState: ordersInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Get All Orders
			.addCase(getOrders.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getOrders.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getOrders.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			})

			// Get One Order
			.addCase(getOrder.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getOrder.fulfilled, (state, action) => {
				state.loading = false;
				state.order = action.payload;
			})
			.addCase(getOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default ordersSlice.reducer;