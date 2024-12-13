import {createAsyncThunk} from "@reduxjs/toolkit";
import {OffersDummy, ProductsDummy} from "../../dummy-data.ts";
// import {
// 	GetBestOffersEndpoint,
// 	GetNewProductsEndpoint,
// 	GetOffersEndpoint,
// 	GetSpecialOffersEndpoint
// } from "../api/endpoints.ts";
// import api from "../api/axios.ts";

export const getOffers = createAsyncThunk(
	'home/getOffers',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetOffersEndpoint);
			// return await response.data;
			return OffersDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch Offers');
		}
	}
);

export const getBestOffers = createAsyncThunk(
	'home/getBestOffers',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetBestOffersEndpoint);
			// return await response.data;
			return ProductsDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch Best Offers');
		}
	}
);

export const getNewProducts = createAsyncThunk(
	'home/getNewProducts',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetNewProductsEndpoint);
			// return await response.data;
			return ProductsDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch New Products');
		}
	}
);

export const getSpecialOffers = createAsyncThunk(
	'home/getSpecialOffers',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetSpecialOffersEndpoint);
			// return await response.data;
			return ProductsDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch Special Offers');
		}
	}
);