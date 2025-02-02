import {createAsyncThunk} from "@reduxjs/toolkit";
import {OffersDummy, ProductsDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";
import {sleep} from "../../utils/helpers.ts";
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
			await sleep(3500);
			return OffersDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch Offers');
		}
	}
);

export const getBestOffers = createAsyncThunk(
	'home/getBestOffers',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetBestOffersEndpoint);
			// return await response.data;
			await sleep(1500);
			return ProductsDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch Best Offers');
		}
	}
);

export const getNewProducts = createAsyncThunk(
	'home/getNewProducts',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetNewProductsEndpoint);
			// return await response.data;
			await sleep(2000);
			return ProductsDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch New Products');
		}
	}
);

export const getSpecialOffers = createAsyncThunk(
	'home/getSpecialOffers',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetSpecialOffersEndpoint);
			// return await response.data;
			await sleep(3000);
			return ProductsDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch Special Offers');
		}
	}
);