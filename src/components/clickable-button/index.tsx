import {motion} from "framer-motion";
import React from "react";

interface ClickableButtonProps {
	children: React.ReactNode,
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ClickableButton: React.FC<ClickableButtonProps> = ({children, onClick}) => {
	return (
		<motion.button
			whileHover={{scale: 1.1}}
			whileTap={{scale: 0.9}}
			className="clickable-button"
			onClick={onClick}
		>
			{children}
		</motion.button>
	);
};

export default ClickableButton;