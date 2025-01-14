import React from 'react';
import {NavIconContainer} from "../../styles/styled.ts";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const textVariants = {
	hidden: {width: 0, opacity: 0},
	visible: {width: "auto", opacity: 1},
};

interface HomeIconProps {
	isActive?: boolean;
}

const HomeIcon: React.FC<HomeIconProps> = ({isActive}) => {
	const {t} = useTranslation();
	return (
		<NavIconContainer $is_active={isActive}>
			<motion.div
				style={{
					overflow: "hidden",
					whiteSpace: "nowrap",
					display: "inline-block",
				}}
				variants={textVariants}
				initial="hidden"
				animate={isActive ? "visible" : "hidden"}
				transition={{duration: 0.2, ease: "easeInOut"}}
			>
				<div>
					{t('home')}
				</div>
			</motion.div>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
				<circle cx="15" cy="15" r="15" transform="matrix(-1 0 0 1 30 0)" fill={isActive ? "#F97316" : "#EEEEEE"}/>
				<path
					d="M17.2419 20.2024V18.2153C17.2419 17.7077 16.8278 17.2962 16.3169 17.2962H14.4481C14.203 17.2962 13.9678 17.3931 13.7942 17.5653C13.6206 17.7376 13.5232 17.9716 13.5232 18.2153V20.2024C13.5245 20.4137 13.4412 20.6165 13.2917 20.766C13.1416 20.9155 12.9381 21 12.7256 21H11.4509C10.8555 21.0013 10.2841 20.7679 9.86293 20.3506C9.44107 19.9333 9.20447 19.3665 9.20447 18.7757V13.1134C9.20447 12.6356 9.41766 12.1832 9.78622 11.8771L14.1225 8.43917C14.8765 7.83661 15.9574 7.85611 16.6894 8.48532L20.9261 11.8771C21.3122 12.1741 21.543 12.6285 21.5547 13.1134V18.7698C21.5547 20.0016 20.5491 21 19.3083 21H18.0628C17.6215 21 17.2627 20.6464 17.2594 20.2083L17.2419 20.2024Z"
					fill={isActive ? "#FFF" : "black"}/>
			</svg>
		</NavIconContainer>
	);
};

export default HomeIcon;