import {createSlice} from '@reduxjs/toolkit';
import {profileInitialState} from "../state/profile.state.ts";
import {getProfileInfo} from "../actions/profile.actions.ts";

const profileSlice = createSlice({
	name: 'profile',
	initialState: profileInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProfileInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProfileInfo.fulfilled, (state, action) => {
				state.loading = false;
				state.info = action.payload;
			})
			.addCase(getProfileInfo.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default profileSlice.reducer;