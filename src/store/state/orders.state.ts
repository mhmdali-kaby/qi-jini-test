import {IOrder} from "../interfaces/order.interface.ts";

interface OrdersState {
	data: IOrder[];
	order: IOrder | null;
	loading: boolean;
	error: string | null;
}

export const ordersInitialState: OrdersState = {
	data: [],
	order: null,
	loading: false,
	error: null,
};