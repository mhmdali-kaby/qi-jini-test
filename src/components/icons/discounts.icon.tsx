import React from 'react';
import {NavIconContainer} from "../../styles/styled.ts";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const textVariants = {
	hidden: {width: 0, opacity: 0},
	visible: {width: "auto", opacity: 1},
};

interface DiscountsIconProps {
	isActive?: boolean;
}

const DiscountsIcon: React.FC<DiscountsIconProps> = ({isActive}) => {
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
					{t('discounts')}
				</div>
			</motion.div>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
				<circle cx="15" cy="15" r="15" transform="matrix(-1 0 0 1 30 0)" fill={isActive ? "#F97316" : "#EEEEEE"}/>
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M8.59677 12.3477C7.64697 12.8513 7 13.8501 7 15C7 16.1501 7.64714 17.149 8.59715 17.6525C8.28164 18.6801 8.53043 19.8438 9.34352 20.6569C10.1566 21.47 11.3202 21.7188 12.3478 21.4034C12.8514 22.3531 13.8501 23 15 23C16.1499 23 17.1487 22.353 17.6523 21.4032C18.68 21.7189 19.8438 21.4701 20.657 20.657C21.4702 19.8438 21.7189 18.68 21.4033 17.6522C22.3531 17.1487 23 16.1499 23 15C23 13.8499 22.3528 12.851 21.4028 12.3475C21.7184 11.3198 21.4696 10.1561 20.6565 9.343C19.8434 8.52994 18.6798 8.28114 17.6522 8.59658C17.1486 7.64689 16.1498 7 15 7C13.8501 7 12.8513 7.64695 12.3477 8.59673C11.32 8.28111 10.1562 8.52988 9.34307 9.34303C8.52991 10.1562 8.28115 11.32 8.59677 12.3477ZM18.5303 12.5303C18.8232 12.2374 18.8232 11.7626 18.5303 11.4697C18.2374 11.1768 17.7626 11.1768 17.4697 11.4697L11.4697 17.4697C11.1768 17.7626 11.1768 18.2374 11.4697 18.5303C11.7626 18.8232 12.2374 18.8232 12.5303 18.5303L18.5303 12.5303ZM19 17.75C19 18.4404 18.4404 19 17.75 19C17.0596 19 16.5 18.4404 16.5 17.75C16.5 17.0596 17.0596 16.5 17.75 16.5C18.4404 16.5 19 17.0596 19 17.75ZM12.25 13.5C12.9404 13.5 13.5 12.9404 13.5 12.25C13.5 11.5596 12.9404 11 12.25 11C11.5596 11 11 11.5596 11 12.25C11 12.9404 11.5596 13.5 12.25 13.5Z"
				      fill={isActive ? "#FFF" : "black"}/>
			</svg>
		</NavIconContainer>
	);
};

export default DiscountsIcon;