import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Header from "../header";
import Nav from "../nav";
import {useLocation} from "react-router-dom";
import {AnimateContainer} from "./styled.ts";
import {routesConfig} from "../../router/routes.ts";

const pageVariants = {
	initial: {x: '100vw', opacity: 2},
	animate: {x: 0, opacity: 1},
	exit: {x: '-100vw', opacity: 0},
};

interface PageWrapperProps {
	children: React.ReactNode,
	withHeader?: boolean,
	withNav?: boolean,
	showHeaderIcon?: boolean,
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
	const location = useLocation();
	const [routeConfig, setRouteConfig] = useState<{
		withHeader?: boolean;
		withNav?: boolean;
		showHeaderIcon?: boolean;
	}>({withHeader: true, withNav: true, showHeaderIcon: true});

	const [isSwipeNavigation, setIsSwipeNavigation] = useState(false);
	const previousPathname = useRef(location.pathname);

	useEffect(() => {
		const handlePopState = () => {
			setIsSwipeNavigation(true);
			setTimeout(() => setIsSwipeNavigation(false), 300); // Timeout matches animation duration
		};

		window.addEventListener('popstate', handlePopState);
		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, []);

	useEffect(() => {
		const currentConfig = Object.keys(routesConfig).find(
			(path) => location.pathname.startsWith(path)
		);

		if (!currentConfig) {
			console.error(`No configuration found for path: ${location.pathname}`);
		} else {
			setRouteConfig(routesConfig[currentConfig]);
		}
		previousPathname.current = location.pathname;
	}, [location]);


	return (
		<>
			<Header showIcon={routeConfig.showHeaderIcon} show={routeConfig.withHeader}/>
			<AnimateContainer>
				<AnimatePresence mode="wait">
					<motion.div
						variants={pageVariants}
						initial={isSwipeNavigation ? false : 'initial'}
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
