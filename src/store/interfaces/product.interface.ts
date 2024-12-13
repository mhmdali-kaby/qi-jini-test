export interface IProduct {
	id: number;
	image: string;
	title: string;
	description: string;
	discount_time?: string | null;
	rate: number;
	price: number;
	old_price?: number | null;
	label?: string | null;
	label_color?: string | null;
}