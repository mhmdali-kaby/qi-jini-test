import {IDiscount} from "./discount.interface.ts";

export interface DiscountsGroup {
	id: number,
	title: string;
	discounts: IDiscount[];
	border_type: string;
	border_color: string;
}