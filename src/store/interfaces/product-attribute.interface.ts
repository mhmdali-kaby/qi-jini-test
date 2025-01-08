export const enum AttributeType {
	COLOR = 1,
	SIZE = 2,
}

export interface IProductAttributeValue {
	id: number
	value: string;
	available_count: number;
}

export interface IProductAttribute {
	id: number;
	title: string;
	type: AttributeType;
	values: IProductAttributeValue[];
}