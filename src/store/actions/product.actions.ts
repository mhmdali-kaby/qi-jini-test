import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetProduct} from "../api/endpoints.ts";
import {ProductDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (id: string, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetProduct.replace('{id}', id.toString()));
			// return await response.data;
			console.log(id)
			return ProductDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch product');
		}
	}
);
