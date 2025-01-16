import {motion, AnimatePresence} from "framer-motion";
import React from "react";

interface BackdropProps {
	children: React.ReactNode,
	onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
	isOpen: boolean
}

const Backdrop: React.FC<BackdropProps> = ({children, onClick, isOpen}) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					onClick={onClick}
					className="backdrop"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Backdrop;