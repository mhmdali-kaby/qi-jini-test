import React from 'react';
import {NavContainer} from "./styled.ts";
import ProfileIcon from "../icons/profile.icon.tsx";
import DiscountsIcon from "../icons/discounts.icon.tsx";
import OrdersIcon from "../icons/orders.icon.tsx";
import HomeIcon from "../icons/home.icon.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {DiscountsRoute, HomeRoute, OrdersRoute, ProfileRoute} from "../../router/routes.ts";

interface NavProps {
	show?: boolean;
}

const Nav: React.FC<NavProps> = ({show}) => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<NavContainer $show={show}>
			<span onClick={() => navigate(ProfileRoute)}>
				<ProfileIcon isActive={location.pathname === ProfileRoute}/>
			</span>
			<span onClick={() => navigate(DiscountsRoute)}>
				<DiscountsIcon isActive={location.pathname === DiscountsRoute}/>
			</span>
			<span onClick={() => navigate(OrdersRoute)}>
				<OrdersIcon isActive={location.pathname === OrdersRoute}/>
			</span>
			<span onClick={() => navigate(HomeRoute)}>
				<HomeIcon isActive={location.pathname === HomeRoute}/>
			</span>
		</NavContainer>
	);
};

export default Nav;