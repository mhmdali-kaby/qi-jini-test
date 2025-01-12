import {ICartItem} from "../interfaces/cart-item.interface.ts";

export interface CartState {
	count: number;
	offline_count: number;
	offline_price: number;
	selected_payment_type: number;
	items: ICartItem[];
	loading: boolean;
	error: string | null;
}

export const cartInitialState: CartState = {
	count: 0,
	offline_count: 0,
	offline_price: 0,
	selected_payment_type: 1,
	items: [],
	loading: false,
	error: null,
};