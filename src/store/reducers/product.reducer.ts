import {createSlice} from '@reduxjs/toolkit';
import {productInitialState} from "../state/product.state.ts";
import {getProduct} from "../actions/product.actions.ts";

const productSlice = createSlice({
	name: 'product',
	initialState: productInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default productSlice.reducer;