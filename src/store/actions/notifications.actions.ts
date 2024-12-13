import {createAsyncThunk} from "@reduxjs/toolkit";
// import api from "../api/axios.ts";
// import {GetNotifications, GetNotificationsCount} from "../api/endpoints.ts";
import {CountDummy, NotificationsDummy} from "../../dummy-data.ts";

export const getNotificationsCount = createAsyncThunk(
	'notifications/getNotificationsCount',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetNotificationsCount);
			// return await response.data;
			return CountDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch notifications count');
		}
	}
);

export const getNotifications = createAsyncThunk(
	'notifications/getNotifications',
	async (_, {rejectWithValue}) => {
		try {
			// const response = await api.get(GetNotifications);
			// return await response.data;
			return NotificationsDummy;
		} catch (error: any) {
			return rejectWithValue(error.response?.data?.message || 'Failed to fetch notifications');
		}
	}
);