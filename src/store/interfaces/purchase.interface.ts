import {IPurchaseAttribute} from "./purchase-attribute.interface.ts";

export interface IPurchase {
	id: number;
	title: string;
	quantity: number;
	attributes: IPurchaseAttribute[]
	status: number;
	price: number;
	image: string;
}