import {IOffer} from "../interfaces/offer.interface.ts";
import {IProduct} from "../interfaces/product.interface.ts";
import {IFilterCategories} from "../interfaces/filter-categories.interface.ts";

interface HomeState {
	offers: {
		data: IOffer[];
		loading: boolean;
		error: string | null;
	};
	bestOffers: {
		data: IProduct[];
		loading: boolean;
		error: string | null;
	};
	newProducts: {
		data: IProduct[];
		loading: boolean;
		error: string | null;
	};
	specialOffers: {
		data: IProduct[];
		loading: boolean;
		error: string | null;
	};
	filterCategories: {
		data: IFilterCategories[];
		loading: boolean;
		error: string | null;
	};
}

export const homeInitialState: HomeState = {
	offers: {
		data: [],
		error: null,
		loading: false
	},
	bestOffers: {
		data: [],
		error: null,
		loading: false
	},
	newProducts: {
		data: [],
		error: null,
		loading: false
	},
	specialOffers: {
		data: [],
		error: null,
		loading: false
	},
	filterCategories: {
		data: [],
		error: null,
		loading: false
	},
};