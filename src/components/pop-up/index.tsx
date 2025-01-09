import {motion} from "framer-motion";
import Backdrop from "../backdrop";
import React from "react";
import {Link} from "react-router-dom";
import {PopUpContainer, PopUpDescription, PopUpTitle} from "./styled.ts";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

interface BackdropProps {
	title: React.ReactNode,
	description: React.ReactNode,
	icon: React.ReactNode,
	button_text: React.ReactNode,
	handleClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void,
	link?: string
}

const PopUp: React.FC<BackdropProps> = ({handleClose, title, description, icon, button_text, link}) => {

	return (
		<Backdrop onClick={handleClose}>
			<PopUpContainer>
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className='pop-up'
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<span>{icon}</span>
					<PopUpTitle>{title}</PopUpTitle>
					<PopUpDescription>{description}</PopUpDescription>
					{link ?
						<Link to={link} className='pup-up-button'>{button_text}</Link>
						:
						<button onClick={handleClose} className='pup-up-button'>{button_text}</button>
					}
				</motion.div>
			</PopUpContainer>
		</Backdrop>
	);
};


export default PopUp;