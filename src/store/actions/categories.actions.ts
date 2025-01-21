import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetAllCategories, GetHomeFilterCategories} from "../api/endpoints.ts";
import {CategoriesDummy, HomeFilterCategoriesDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";
import {sleep} from "../../utils/helpers.ts";

export const getAllCategories = createAsyncThunk(
	'categories/getAllCategories',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetAllCategories);
			// return await response.data;
			return CategoriesDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch categories');
		}
	}
);

export const getHomeFilterCategories = createAsyncThunk(
	'categories/getHomeFilterCategories',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetHomeFilterCategories);
			// return await response.data;
			await sleep(2000);
			return HomeFilterCategoriesDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch categories');
		}
	}
);