import {createSlice} from "@reduxjs/toolkit";
import {getBestOffers, getNewProducts, getOffers, getSpecialOffers} from "../actions/home.actions.ts";
import {homeInitialState} from "../state/home.state.ts";
import {getHomeFilterCategories} from "../actions/categories.actions.ts";

const homeSlice = createSlice({
	name: 'home',
	initialState: homeInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Offers
			.addCase(getOffers.pending, (state) => {
				state.offers.loading = true;
				state.offers.error = null;
			})
			.addCase(getOffers.fulfilled, (state, action) => {
				state.offers.loading = false;
				state.offers.data = action.payload;
			})
			.addCase(getOffers.rejected, (state, action) => {
				state.offers.loading = false;
				state.offers.error = action.payload as string;
			})

			// Best Offers
			.addCase(getBestOffers.pending, (state) => {
				state.bestOffers.loading = true;
				state.bestOffers.error = null;
			})
			.addCase(getBestOffers.fulfilled, (state, action) => {
				state.bestOffers.loading = false;
				state.bestOffers.data = action.payload;
			})
			.addCase(getBestOffers.rejected, (state, action) => {
				state.bestOffers.loading = false;
				state.bestOffers.error = action.payload as string;
			})

			// Special Offers
			.addCase(getSpecialOffers.pending, (state) => {
				state.specialOffers.loading = true;
				state.specialOffers.error = null;
			})
			.addCase(getSpecialOffers.fulfilled, (state, action) => {
				state.specialOffers.loading = false;
				state.specialOffers.data = action.payload;
			})
			.addCase(getSpecialOffers.rejected, (state, action) => {
				state.specialOffers.loading = false;
				state.specialOffers.error = action.payload as string;
			})

			// New Products
			.addCase(getNewProducts.pending, (state) => {
				state.newProducts.loading = true;
				state.newProducts.error = null;
			})
			.addCase(getNewProducts.fulfilled, (state, action) => {
				state.newProducts.loading = false;
				state.newProducts.data = action.payload;
			})
			.addCase(getNewProducts.rejected, (state, action) => {
				state.newProducts.loading = false;
				state.newProducts.error = action.payload as string;
			})

			// Filter Categories
			.addCase(getHomeFilterCategories.pending, (state) => {
				state.filterCategories.loading = true;
				state.filterCategories.error = null;
			})
			.addCase(getHomeFilterCategories.fulfilled, (state, action) => {
				state.filterCategories.loading = false;
				state.filterCategories.data = action.payload;
			})
			.addCase(getHomeFilterCategories.rejected, (state, action) => {
				state.filterCategories.loading = false;
				state.filterCategories.error = action.payload as string;
			});
	},
});

export default homeSlice.reducer;