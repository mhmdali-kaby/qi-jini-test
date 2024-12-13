import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import { GetCartCount } from "../api/endpoints.ts";
import {CountDummy} from "../../dummy-data.ts";

export const getCartCount = createAsyncThunk(
	'cart/getCartCount',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetCartCount);
			// return await response.data;
			return CountDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch cart count');
		}
	}
);