import {DiscountsGroup} from "../interfaces/discounts-group.interface.ts";

interface DiscountsState {
	data: DiscountsGroup[];
	loading: boolean;
	error: string | null;
}

export const discountInitialState: DiscountsState = {
	data: [],
	loading: false,
	error: null,
};