import React from 'react';
import {BackIconContainer} from "../../styles/styled.ts";

interface LeftArrowIconProps {
	onClick?: () => void;
}

const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({onClick}) => {
	return (
		<BackIconContainer>
			<svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9571 12L14.1035 8.85353L13.3964 8.14642L9.89641 11.6464C9.70115 11.8417 9.70115 12.1583 9.89641 12.3535L13.3964 15.8535L14.1035 15.1464L10.9571 12Z" fill="white"/>
			</svg>
		</BackIconContainer>
	);
};

export default LeftArrowIcon;