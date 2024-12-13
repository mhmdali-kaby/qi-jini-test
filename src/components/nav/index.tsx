import React from 'react';
import {NavContainer} from "./styled.ts";
import ProfileIcon from "../icons/profile.icon.tsx";
import DiscountsIcon from "../icons/discounts.icon.tsx";
import PurchasesIcon from "../icons/purchases.icon.tsx";
import HomeIcon from "../icons/home.icon.tsx";
import {Link, useLocation} from "react-router-dom";
import {DiscountsRoute, HomeRoute, ProfileRoute, PurchasesRoute} from "../../router/routes.ts";

const Nav: React.FC = () => {
	const location = useLocation();
	return (
		<NavContainer>
			<Link to={ProfileRoute}>
				<ProfileIcon isActive={location.pathname === ProfileRoute}/>
			</Link>
			<Link to={DiscountsRoute}>
				<DiscountsIcon isActive={location.pathname === DiscountsRoute}/>
			</Link>
			<Link to={PurchasesRoute}>
				<PurchasesIcon isActive={location.pathname === PurchasesRoute}/>
			</Link>
			<Link to={HomeRoute}>
				<HomeIcon isActive={location.pathname === HomeRoute}/>
			</Link>
		</NavContainer>
	);
};

export default Nav;