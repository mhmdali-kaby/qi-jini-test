import React from 'react';
import {NavContainer} from "./styled.ts";
import ProfileIcon from "../icons/profile.icon.tsx";
import DiscountsIcon from "../icons/discounts.icon.tsx";
import OrdersIcon from "../icons/orders.icon.tsx";
import HomeIcon from "../icons/home.icon.tsx";
import {Link, useLocation} from "react-router-dom";
import {DiscountsRoute, HomeRoute, OrdersRoute, ProfileRoute} from "../../router/routes.ts";

interface NavProps {
	show?: boolean;
}

const Nav: React.FC<NavProps> = ({show}) => {
	const location = useLocation();
	return (
		<NavContainer $show={show}>
			<Link to={ProfileRoute}>
				<ProfileIcon isActive={location.pathname === ProfileRoute}/>
			</Link>
			<Link to={DiscountsRoute}>
				<DiscountsIcon isActive={location.pathname === DiscountsRoute}/>
			</Link>
			<Link to={OrdersRoute}>
				<OrdersIcon isActive={location.pathname === OrdersRoute}/>
			</Link>
			<Link to={HomeRoute}>
				<HomeIcon isActive={location.pathname === HomeRoute}/>
			</Link>
		</NavContainer>
	);
};

export default Nav;