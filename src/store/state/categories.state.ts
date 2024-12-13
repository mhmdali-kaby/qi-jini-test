import {ICategory} from "../interfaces/category.interface.ts";

interface CategoryState {
	data: ICategory[];
	loading: boolean;
	error: string | null;
}

export const categoryInitialState: CategoryState = {
	data: [],
	loading: false,
	error: null,
};