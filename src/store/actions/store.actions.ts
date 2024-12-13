import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetStoreInfo} from "../api/endpoints.ts";
import {StoreDummy} from "../../dummy-data.ts";

export const getStoreInfo = createAsyncThunk(
	'store/getStoreInfo',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetStoreInfo);
			// return await response.data;
			return StoreDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch Store Info');
		}
	}
);