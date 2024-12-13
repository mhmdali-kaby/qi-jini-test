interface CartState {
	count: number;
	loading: boolean;
	error: string | null;
}

export const cartInitialState: CartState = {
	count: 0,
	loading: false,
	error: null,
};