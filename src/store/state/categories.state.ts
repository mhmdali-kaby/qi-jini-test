import {ICategory} from "../interfaces/category.interface.ts";

interface CategoriesState {
	data: ICategory[];
	loading: boolean;
	error: string | null;
}

export const categoriesInitialState: CategoriesState = {
	data: [],
	loading: false,
	error: null,
};