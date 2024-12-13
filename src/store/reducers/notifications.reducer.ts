import {createSlice} from '@reduxjs/toolkit';
import {notificationsInitialState} from "../state/notifications.state.ts";
import {getNotifications, getNotificationsCount} from "../actions/notifications.actions.ts";

const notificationsSlice = createSlice({
	name: 'notifications',
	initialState: notificationsInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Notification Count
			.addCase(getNotificationsCount.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getNotificationsCount.fulfilled, (state, action) => {
				state.loading = false;
				state.count = action.payload?.count ?? 0;
			})
			.addCase(getNotificationsCount.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			})

			// Notification
			.addCase(getNotifications.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getNotifications.fulfilled, (state, action) => {
				state.loading = false;
				state.notifications = action.payload;
			})
			.addCase(getNotifications.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default notificationsSlice.reducer;