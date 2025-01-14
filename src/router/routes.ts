interface IRouteConfig {
	withHeader: boolean;
	withNav: boolean;
	showHeaderIcon: boolean;
}

export const SplashRoute = '/splash';
export const HomeRoute = '/home';
export const NotificationsRoute = '/notifications';
export const ProfileRoute = '/profile';
export const CategoriesRoute = '/categories';
export const DiscountsRoute = '/discounts';
export const OrdersRoute = '/orders';
export const ProductsRoute = '/products';
export const ProductRoute = '/products/:id';
export const CartRoute = '/cart';
export const PaymentRoute = '/payment';
export const OrderDetailsRoute = '/orders/:id/details';
export const AddLocationRoute = '/locations/new';

export const routesConfig: Record<string, IRouteConfig> = {
	[SplashRoute]: {withHeader: false, withNav: false, showHeaderIcon: false},
	[HomeRoute]: {withHeader: true, withNav: true, showHeaderIcon: true},
	[NotificationsRoute]: {withHeader: true, withNav: false, showHeaderIcon: false},
	[CategoriesRoute]: {withHeader: true, withNav: true, showHeaderIcon: false},
	[DiscountsRoute]: {withHeader: true, withNav: true, showHeaderIcon: false},
	[OrdersRoute]: {withHeader: true, withNav: true, showHeaderIcon: false},
	[ProfileRoute]: {withHeader: true, withNav: true, showHeaderIcon: false},
	[ProductsRoute]: {withHeader: true, withNav: false, showHeaderIcon: false},
	[CartRoute]: {withHeader: true, withNav: false, showHeaderIcon: false},
	[PaymentRoute]: {withHeader: true, withNav: false, showHeaderIcon: false},
	[AddLocationRoute]: {withHeader: true, withNav: false, showHeaderIcon: false},
};