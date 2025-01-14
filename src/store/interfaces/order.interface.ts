import {IOrderProduct} from "./order-product.interface.ts";

interface IOrderItem {
	quantity: number,
	product: IOrderProduct
}

export interface IOrder {
	id: number;
	status: number;
	price: number;
	pending_at?: string;
	approved_at?: string;
	on_delivery_at?: string;
	delivered_at?: string;
	items: IOrderItem[];
}