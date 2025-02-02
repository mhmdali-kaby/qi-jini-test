import {IProductAttribute} from "./product-attribute.interface.ts";

export interface IProduct {
	id: number;
	images: string[];
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
	attributes?: IProductAttribute[];
}