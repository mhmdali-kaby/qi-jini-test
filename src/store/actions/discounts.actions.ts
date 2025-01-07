import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetAllCategories, GetHomeFilterCategories} from "../api/endpoints.ts";
import {DiscountDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";

export const getAllDiscounts = createAsyncThunk(
	'discounts/getAllDiscounts',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetAllCategories);
			// return await response.data;
			return DiscountDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error?.response?.data || 'Failed to fetch discounts.');
		}
	}
);
