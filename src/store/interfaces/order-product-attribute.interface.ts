import {AttributeType} from "./product-attribute.interface.ts";

export interface IOrderProductAttribute {
	id: number;
	title: string;
	type: AttributeType;
	value: string;
}