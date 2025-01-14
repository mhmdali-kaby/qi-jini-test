import {AttributeType} from "./product-attribute.interface.ts";

export interface IOrderAttribute {
	id: number;
	title: string;
	type: AttributeType;
	value: string;
}