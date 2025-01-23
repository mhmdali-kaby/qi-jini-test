import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetOrders, GetOrder} from "../api/endpoints.ts";
import {OrderDummy, OrdersDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";
import {sleep} from "../../utils/helpers.ts";

export const getOrders = createAsyncThunk(
	'orders/getOrders',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetOrders);
			// return await response.data;
			await sleep(2000);
			return OrdersDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch orders');
		}
	}
);

export const getOrder = createAsyncThunk(
	'orders/getOrder',
	async (id, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetOrder.replace('{id}', id.toString()));
			// return await response.data;
			console.log(id)
			return OrderDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch order');
		}
	}
);