import {IOrderProductAttribute} from "./order-product-attribute.interface.ts";

export interface IOrderProduct {
	id: number;
	image: string;
	title: string;
	type?: string;
	description: string;
	discount_time?: string | null;
	rate?: number;
	rate_count?: number;
	price?: number;
	old_price?: number | null;
	label?: string | null;
	label_color?: string | null;
	attributes?: IOrderProductAttribute[];
}