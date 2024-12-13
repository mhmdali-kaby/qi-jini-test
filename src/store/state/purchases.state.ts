import {IPurchase} from "../interfaces/purchase.interface.ts";

interface PurchasesState {
	data: IPurchase[];
	loading: boolean;
	error: string | null;
}

export const purchasesInitialState: PurchasesState = {
	data: [],
	loading: false,
	error: null,
};