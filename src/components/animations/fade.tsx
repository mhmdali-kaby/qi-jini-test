import React from "react";
import {motion} from 'framer-motion';

interface FadeAnimationProps {
	children: React.ReactNode
}

const fadeAnimationVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.5 } },
};

const FadeAnimation: React.FC<FadeAnimationProps> = ({children}) => {
	return (
		<motion.div
			variants={fadeAnimationVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			className='fade-animation'
		>
			{children}
		</motion.div>
	);
};

export default FadeAnimation;