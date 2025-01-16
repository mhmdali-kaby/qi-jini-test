import {AnimatePresence, motion, PanInfo} from "framer-motion";
import React from "react";
import {ApplyButton, FilterNotch, FiltersContainer} from "./styled.ts";
import InputComponent from "../input";
import ClickableButton from "../clickable-button";
import {useTranslation} from "react-i18next";

interface GlobalFiltersProps {
	isOpen: boolean,
	onClose: () => void
}

const sheetVariants = {
	hidden: { y: "100%" },
	visible: { y: 0 },
};

const backdropVariants = {
	hidden: {height: 0, opacity: 0},
	visible: {height: "100vh", opacity: 1},
};

const GlobalFilters: React.FC<GlobalFiltersProps> = ({isOpen, onClose}) => {
	const {t} = useTranslation();

	const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		if (info.offset.y > 50) {
			onClose();
		}
	};

	const onClickBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}

	return (
		<AnimatePresence mode="wait">
			<motion.div
				onClick={onClickBackdrop}
				className='backdrop'
				initial="hidden"
				animate={isOpen ? "visible" : "hidden"}
				exit={{opacity: 0}}
				variants={backdropVariants}
				transition={{duration: 0.3, ease: 'backInOut'}}
			>
				<motion.div
					initial="hidden"
					animate={isOpen ? "visible" : "hidden"}
					variants={sheetVariants}
					transition={{type: "keyframes", stiffness: 300, damping: 30, duration: 0.3}}
					drag="y"
					dragConstraints={{ top: 0, bottom: 0 }}
					dragElastic={0.2}
					onDragEnd={handleDragEnd}
					className='bottom-sheet'
				>
					<>
						<FilterNotch>
							<span/>
						</FilterNotch>
						<FiltersContainer>
							<div className='inputs-set'>
								<InputComponent placeholder={'test'} name={'test'}/>
								<InputComponent placeholder={'test'} name={'test'}/>
								<InputComponent placeholder={'test'} name={'test'}/>
								<InputComponent placeholder={'test'} name={'test'}/>
								<InputComponent placeholder={'test'} name={'test'}/>
								<InputComponent placeholder={'test'} name={'test'}/>
							</div>
							<ClickableButton onClick={() => {}}>
								<ApplyButton>
									{t('apply')}
								</ApplyButton>
							</ClickableButton>
						</FiltersContainer>
					</>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default GlobalFilters;