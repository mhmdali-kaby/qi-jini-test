export const preventSwipe = (element: HTMLElement): boolean => {
	while (element && element !== document.body) {
		if (element.classList.contains('hidden-scroll') || element.classList.contains('backdrop') || element.classList.contains('prevent-swipe')) {
			return true;
		}
		element = element.parentElement as HTMLElement;
	}
	return false;
}