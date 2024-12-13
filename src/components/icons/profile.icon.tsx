import React from 'react';
import {NavIconContainer} from "../../styles/styled.ts";

interface ProfileIconProps {
	isActive?: boolean;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({isActive}) => {
	return (
		<NavIconContainer $is_active={isActive}>
			{isActive &&
        <div>
          الحساب
        </div>
			}
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
				<circle cx="15" cy="15" r="15" transform="matrix(-1 0 0 1 30 0)" fill={isActive ? "#F97316" : "#EEEEEE"}/>
				<path
					d="M15.3977 17.54C18.8482 17.54 21.7954 18.084 21.7954 20.2601C21.7954 22.4369 18.8666 23.0001 15.3977 23.0001C11.9473 23.0001 9.00009 22.4569 9.00009 20.2801C9.00009 18.1032 11.9281 17.54 15.3977 17.54Z"
					fill={isActive ? "#FFF" : "black"}/>
				<path
					d="M15.3977 15.4673C13.0473 15.4673 11.1641 13.5833 11.1641 11.2336C11.1641 8.88402 13.0473 7 15.3977 7C17.7473 7 19.6313 8.88402 19.6313 11.2336C19.6313 13.5833 17.7473 15.4673 15.3977 15.4673Z"
					fill={isActive ? "#FFF" : "black"}/>
			</svg>
		</NavIconContainer>
	);
};

export default ProfileIcon;