import {configureStore} from '@reduxjs/toolkit';
import homeReducer from "./reducers/home.reducer.ts";
import categoriesReducer from "./reducers/categories.reducer.ts";
import splashReducer from "./reducers/splash.reducer.ts";
import cartReducer from "./reducers/cart.reducer.ts";
import notificationsReducer from "./reducers/notifications.reducer.ts";
import storeReducer from "./reducers/store.reducer.ts";
import purchasesReducer from "./reducers/purchases.reducer.ts";
import profileReducer from "./reducers/profile.reducer.ts";

export const store = configureStore({
	reducer: {
		homeReducer,
		categoriesReducer,
		splashReducer,
		cartReducer,
		notificationsReducer,
		storeReducer,
		purchasesReducer,
		profileReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch