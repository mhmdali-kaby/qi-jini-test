import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetPurchases} from "../api/endpoints.ts";
import {PurchasesDummy} from "../../dummy-data.ts";

export const getPurchases = createAsyncThunk(
	'purchases/getPurchases',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetPurchases);
			// return await response.data;
			return PurchasesDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch purchases');
		}
	}
);