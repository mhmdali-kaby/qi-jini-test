import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomeView from "../views/home";
import SplashView from "../views/splash";
import {
	AddLocationRoute,
	CartRoute,
	CategoriesRoute,
	DiscountsRoute,
	HomeRoute,
	NotificationsRoute,
	OrderDetailsRoute,
	OrdersRoute,
	PaymentRoute,
	ProductRoute,
	ProfileRoute,
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
import PageWrapper from "../components/page-wrapper";
import OrderDetailsView from "../views/order-details";

function Router() {
	return (
		<BrowserRouter>
			<PageWrapper>
				<Routes>
					<Route path="/" element={<Navigate to={SplashRoute} replace/>}/>
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
					<Route path={OrderDetailsRoute} element={<OrderDetailsView/>}/>
				</Routes>
			</PageWrapper>
		</BrowserRouter>
	)
}

export default Router
