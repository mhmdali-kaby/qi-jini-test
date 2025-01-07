import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetStoreInfo} from "../api/endpoints.ts";
import {StoreDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";

export const getStoreInfo = createAsyncThunk(
	'store/getStoreInfo',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetStoreInfo);
			// return await response.data;
			return StoreDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch Store Info');
		}
	}
);