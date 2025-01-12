import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetCartCount, GetCartItems} from "../api/endpoints.ts";
import {CartItemsDummy, CountDummy} from "../../dummy-data.ts";
import {AxiosError} from "axios";
import {ICartItem} from "../interfaces/cart-item.interface.ts";
import {CartState} from "../state/cart.state.ts";

export const getCartCount = createAsyncThunk(
	'cart/getCartCount',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetCartCount);
			// return await response.data;
			return CountDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch cart count');
		}
	}
);

export const getCartItems = createAsyncThunk(
	'cart/getCartItems',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetCartItems);
			// return await response.data;
			return CartItemsDummy;
		} catch (err) {
			const error = err as AxiosError;
			return rejectWithValue(error.response?.data || 'Failed to fetch cart items');
		}
	}
);

export const increaseCartItemCountAction = (state: CartState, action: PayloadAction<number>) => {
	const items = state.items;
	const id = action.payload;
	const item = items.find((item: ICartItem) => item.id === id);
	if (item) {
		item.count += 1;
	}
}

export const decrementCartItemCountAction = (state: CartState, action: PayloadAction<number>) => {
	const items = state.items;
	const id = action.payload;
	const item = items.find((item: ICartItem) => item.id === id);
	if (item && item.count > 1) {
		item.count -= 1;
	}
}

export const offlineCartItemsInfoAction = (state: CartState) => {
	state.offline_count = state.items.length;
	let price = 0;
	for (const item of state.items) {
		price += (item.count * item.price);
	}
	state.offline_price = price;
}

export const changePaymentMethodAction = (state: CartState, action: PayloadAction<number>) => {
	state.selected_payment_type = action.payload
}