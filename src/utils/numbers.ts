export const formatPrice = (value?: number | null) => {
	if (!value) return "";
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}