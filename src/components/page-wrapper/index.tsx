import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Header from "../header";
import Nav from "../nav";
import {useLocation, useNavigate} from "react-router-dom";
import {AnimateContainer} from "./styled.ts";
import {routesConfig} from "../../router/routes.ts";
import {useSwipeable} from "react-swipeable";
import {preventSwipe} from "../../utils/elements.ts";

const pageVariants = {
	initial: { x: '100%', opacity: 0.8, scale: 0.95 },
	animate: { x: 0, opacity: 1, scale: 1 },
	exit: { x: '-100%', opacity: 0.8, scale: 0.95 },
};

interface PageWrapperProps {
	children: React.ReactNode,
	withHeader?: boolean,
	withNav?: boolean,
	showHeaderIcon?: boolean,
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [routeConfig, setRouteConfig] = useState<{
		withHeader?: boolean;
		withNav?: boolean;
		showHeaderIcon?: boolean;
	}>({withHeader: true, withNav: true, showHeaderIcon: true});


	const swipeHandlers = useSwipeable({
		onSwipedLeft: (eventData) => {
			if (preventSwipe(eventData.event.target as HTMLElement)) return;
			navigate(1);
		},
		onSwipedRight: (eventData) => {
			if (preventSwipe(eventData.event.target as HTMLElement)) return;
			navigate(-1);
		},
		preventScrollOnSwipe: true,
		trackTouch: true,
		delta: 30,
	});

	useEffect(() => {
		const currentConfig = Object.keys(routesConfig).find(
			(path) => location.pathname.startsWith(path)
		);

		if (currentConfig) {
			setRouteConfig(routesConfig[currentConfig]);
		}
	}, [location]);


	return (
		<>
			<Header showIcon={routeConfig.showHeaderIcon} show={routeConfig.withHeader}/>
			<AnimateContainer {...swipeHandlers}>
				<AnimatePresence mode="wait">
					<motion.div
						variants={pageVariants}
						initial={'initial'}
						animate="animate"
						exit="exit"
						transition={{type: 'keyframes', duration: 0.1}}
						key={location.pathname}
					>
						{children}
					</motion.div>
				</AnimatePresence>
			</AnimateContainer>
			<Nav show={routeConfig.withNav}/>
		</>
	);
};

export default PageWrapper;
