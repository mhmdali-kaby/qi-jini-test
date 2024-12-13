import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetAllCategories, GetHomeFilterCategories} from "../api/endpoints.ts";
import {CategoriesDummy, HomeFilterCategoriesDummy} from "../../dummy-data.ts";

export const getAllCategories = createAsyncThunk(
	'categories/getAllCategories',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetAllCategories);
			// return await response.data;
			return CategoriesDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch categories');
		}
	}
);

export const getHomeFilterCategories = createAsyncThunk(
	'categories/getHomeFilterCategories',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetHomeFilterCategories);
			// return await response.data;
			return HomeFilterCategoriesDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch categories');
		}
	}
);