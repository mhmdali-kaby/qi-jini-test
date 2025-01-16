export const preventSwipe = (element: HTMLElement): boolean => {
	while (element && element !== document.body) {
		if (element.classList.contains('hidden-scroll') || element.classList.contains('backdrop')) {
			return true;
		}
		element = element.parentElement as HTMLElement;
	}
	return false;
}