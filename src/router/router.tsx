import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "../views/home";
import SplashView from "../views/splash";
import {DiscountsRoute, HomeRoute, NotificationsRoute, ProfileRoute, PurchasesRoute, SplashRoute} from "./routes.ts";
import CategoriesView from "../views/categories";
import NotificationsView from "../views/notifications";
import PurchasesView from "../views/purchases";
import ProfileView from "../views/profile";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={SplashRoute} element={<SplashView/>}/>
				<Route path={NotificationsRoute} element={<NotificationsView/>}/>
				<Route path={HomeRoute} element={<HomeView/>}/>
				<Route path={DiscountsRoute} element={<CategoriesView/>}/>
				<Route path={PurchasesRoute} element={<PurchasesView/>}/>
				<Route path={ProfileRoute} element={<ProfileView/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
