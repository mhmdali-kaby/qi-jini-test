import {createAsyncThunk} from "@reduxjs/toolkit";
import {SplashesDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";
// import api from "../api/axios.ts";
// import {GetSplashes} from "../api/endpoints.ts";

export const getSplashes = createAsyncThunk(
	'splash/getSplashes',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetSplashes);
			// return await response.data;
			return SplashesDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch Splashes');
		}
	}
);