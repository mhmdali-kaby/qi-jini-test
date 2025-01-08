import {AttributeType} from "./product-attribute.interface.ts";

export interface IPurchaseAttribute {
	id: number;
	title: string;
	type: AttributeType;
	value: string;
}