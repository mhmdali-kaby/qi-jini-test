import {IStoreInfo} from "../interfaces/store-info.interface.ts";

interface StoreState {
	info: IStoreInfo;
	loading: boolean;
	error: string | null;
}

export const storeInitialState: StoreState = {
	info: {},
	loading: false,
	error: null,
};