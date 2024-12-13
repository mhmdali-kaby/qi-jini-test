import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetProfileInfo} from "../api/endpoints.ts";
import {ProfileInfoDummy} from "../../dummy-data.ts";

export const getProfileInfo = createAsyncThunk(
	'profile/getProfileInfo',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetProfileInfo);
			// return await response.data;
			return ProfileInfoDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch profile');
		}
	}
);