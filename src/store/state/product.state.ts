import {IProduct} from "../interfaces/product.interface.ts";

interface ProductState {
	data: IProduct | null;
	loading: boolean;
	error: string | null;
}

export const productInitialState: ProductState = {
	data: null,
	loading: false,
	error: null,
};