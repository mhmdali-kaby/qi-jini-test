import { motion } from "framer-motion";
import React from "react";
import {BackdropContainer} from "./styled.ts";

interface BackdropProps {
	children: React.ReactNode,
	onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {

	return (
		<BackdropContainer>
			<motion.div
				onClick={onClick}
				className="backdrop"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
			>
				{children}
			</motion.div>
		</BackdropContainer>
	);
};

export default Backdrop;