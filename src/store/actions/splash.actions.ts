import {createAsyncThunk} from "@reduxjs/toolkit";
import {SplashesDummy} from "../../dummy-data.ts";
// import api from "../api/axios.ts";
// import {GetSplashes} from "../api/endpoints.ts";

export const getSplashes = createAsyncThunk(
	'splash/getSplashes',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetSplashes);
			// return await response.data;
			return SplashesDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch Splashes');
		}
	}
);