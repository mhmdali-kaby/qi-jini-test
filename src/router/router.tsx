import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "../views/home";
import SplashView from "../views/splash";
import {
	AddLocationRoute,
	CartRoute,
	CategoriesRoute,
	DiscountsRoute,
	HomeRoute,
	NotificationsRoute,
	PaymentRoute,
	ProductRoute,
	ProfileRoute,
	OrdersRoute,
	SplashRoute
} from "./routes.ts";
import CategoriesView from "../views/categories";
import NotificationsView from "../views/notifications";
import OrdersView from "../views/orders";
import ProfileView from "../views/profile";
import DiscountsView from "../views/discounts";
import ProductView from "../views/product";
import CartView from "../views/cart";
import PaymentView from "../views/payment";
import AddLocationView from "../views/add-location";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={SplashRoute} element={<SplashView/>}/>
				<Route path={NotificationsRoute} element={<NotificationsView/>}/>
				<Route path={HomeRoute} element={<HomeView/>}/>
				<Route path={CategoriesRoute} element={<CategoriesView/>}/>
				<Route path={DiscountsRoute} element={<DiscountsView/>}/>
				<Route path={OrdersRoute} element={<OrdersView/>}/>
				<Route path={ProfileRoute} element={<ProfileView/>}/>
				<Route path={ProductRoute} element={<ProductView/>}/>
				<Route path={CartRoute} element={<CartView/>}/>
				<Route path={PaymentRoute} element={<PaymentView/>}/>
				<Route path={AddLocationRoute} element={<AddLocationView/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
