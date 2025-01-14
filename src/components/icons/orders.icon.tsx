import React from 'react';
import {NavIconContainer} from "../../styles/styled.ts";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const textVariants = {
	hidden: {width: 0, opacity: 0},
	visible: {width: "auto", opacity: 1},
};

interface OrdersIconProps {
	isActive?: boolean;
}

const OrdersIcon: React.FC<OrdersIconProps> = ({isActive}) => {
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
					{t('purchases')}
				</div>
			</motion.div>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
				<circle cx="15" cy="15" r="15" transform="matrix(-1 0 0 1 30 0)" fill={isActive ? "#F97316" : "#EEEEEE"}/>
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M15 7C13.2329 7 11.8003 8.43269 11.8003 10.2H9.45692C7.99295 10.2 6.80747 11.4649 7.02609 12.9433L8.20904 20.9433C8.3866 22.1441 9.43984 23 10.6399 23H19.3601C20.5602 23 21.6134 22.1441 21.791 20.9433L22.9739 12.9433C23.1925 11.4649 22.007 10.2 20.543 10.2H18.1998C18.1998 8.43269 16.7672 7 15 7ZM16.5999 10.2C16.5999 9.31634 15.8837 8.6 15 8.6C14.1164 8.6 13.4002 9.31634 13.4002 10.2H16.5999ZM18.0019 14.8732C18.2929 15.2057 18.2591 15.7111 17.9267 16.0021L14.7269 18.8021C14.4099 19.0794 13.9323 19.0635 13.6345 18.7657L12.0346 17.1657C11.7222 16.8533 11.7222 16.3467 12.0346 16.0343C12.347 15.7219 12.8535 15.7219 13.1659 16.0343L14.2366 17.1051L16.8731 14.7979C17.2056 14.507 17.711 14.5407 18.0019 14.8732Z"
				      fill={isActive ? "#FFF" : "black"}/>
			</svg>
		</NavIconContainer>
	);
};

export default OrdersIcon;