import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../../store";
import {getCartCount} from "../../store/actions/cart.actions.ts";
import {getNotificationsCount} from "../../store/actions/notifications.actions.ts";
import {
	HeaderContainer,
	HeaderIcon,
	HeaderIconCounter,
	HeaderLeftIcons,
	HeaderRightAvatar,
	HeaderRightContent,
	HeaderRightContentName,
	HeaderRightContentWelcome,
	HeaderRightIcons
} from "./styled.ts";
import {useNavigate} from "react-router-dom";
import {getStoreInfo} from "../../store/actions/store.actions.ts";
import {CartRoute, NotificationsRoute} from "../../router/routes.ts";
import CartIcon from "../icons/cart.icon.tsx";
import NotificationIcon from "../icons/notification.icon.tsx";
import LeftArrowIcon from "../icons/left-arrow.icon.tsx";
import {useTranslation} from "react-i18next";

interface HeaderProps {
	showIcon?: boolean;
	show?: boolean;
}

const Header: React.FC<HeaderProps> = ({showIcon, show}) => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {count: cartCount} = useSelector((state: RootState) => state.cartReducer);
	const {count: notificationCount} = useSelector((state: RootState) => state.notificationsReducer);
	const {info: store} = useSelector((state: RootState) => state.storeReducer);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getCartCount());
		dispatch(getNotificationsCount());
		dispatch(getStoreInfo());
	}, [dispatch]);

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<HeaderContainer $show={show}>
			<HeaderLeftIcons>
				{showIcon ?
					<>
						<span onClick={() => navigate(CartRoute)}>
							<HeaderIcon $padding="18">
								<CartIcon/>
								<HeaderIconCounter $small={false}>
									<span>
										{cartCount}
									</span>
								</HeaderIconCounter>
							</HeaderIcon>
						</span>
						<span onClick={() => navigate(NotificationsRoute)}>
							<HeaderIcon $padding="14">
								<NotificationIcon/>
								<HeaderIconCounter $small={true}>
									<span>
										{notificationCount}
									</span>
								</HeaderIconCounter>
							</HeaderIcon>
						</span>
					</>
					:
					<>
						<LeftArrowIcon onClick={handleGoBack}/>
					</>
				}
			</HeaderLeftIcons>
			<HeaderRightIcons>
				{store &&
          <HeaderRightContent>
            <HeaderRightContentWelcome>
							{t('welcome_to')}
            </HeaderRightContentWelcome>
            <HeaderRightContentName>
							{store.name}
            </HeaderRightContentName>
          </HeaderRightContent>
				}
				<HeaderRightAvatar>
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="34" viewBox="0 0 22 34" fill="none">
						<path fillRule="evenodd" clipRule="evenodd"
						      d="M13.0775 4.62955C10.3734 3.81857 7.32966 4.61358 5.40647 6.89422C4.84263 7.56145 4.43026 8.30274 4.14924 9.07806C3.86222 9.85384 3.69754 10.6878 3.69754 11.562C3.69754 14.5725 5.55734 17.1511 8.19968 18.2386C8.23727 18.2542 8.27532 18.2672 8.31335 18.2802C8.34321 18.2905 8.37306 18.3007 8.40264 18.3121C8.43531 18.3243 8.46792 18.3368 8.50054 18.3492C8.60959 18.3908 8.7188 18.4325 8.83077 18.4668C11.5579 19.323 14.6487 18.536 16.5937 16.2302C17.157 15.5618 17.5692 14.8202 17.851 14.0447C18.1372 13.2693 18.3019 12.4362 18.3019 11.562C18.3019 10.6534 18.1326 9.78427 17.8235 8.98357C15.4489 8.72231 13.5334 6.93782 13.0775 4.62955ZM10.9994 15.7772C12.8377 15.7772 14.4043 14.6236 15.0054 13.0131C15.5863 11.3945 15.1327 9.50865 13.7238 8.33334C13.3391 8.0119 12.9133 7.7745 12.4678 7.60893C12.0093 7.44275 11.5161 7.34765 10.9994 7.34765C9.16208 7.34765 7.59621 8.50026 6.99485 10.1097C6.413 11.7289 6.86665 13.6151 8.27534 14.7913C8.66174 15.1133 9.08942 15.3514 9.53647 15.517C9.99372 15.6826 10.4852 15.7772 10.9994 15.7772Z"
						      fill="#444444"/>
						<path fillRule="evenodd" clipRule="evenodd"
						      d="M10.9994 20.1676C17.3737 20.1676 21.9999 23.0763 21.9999 27.0836C21.9999 31.0904 17.3737 34 10.9994 34C4.62601 34 -0.00012207 31.0904 -0.00012207 27.0836C-0.00012207 23.0763 4.62601 20.1676 10.9994 20.1676ZM10.9994 30.9853C15.4017 30.9853 18.9696 29.2386 18.9696 27.0836C18.9696 24.9281 15.4017 23.1816 10.9994 23.1816C6.59839 23.1816 3.03013 24.9281 3.03013 27.0836C3.03013 29.2386 6.59839 30.9853 10.9994 30.9853Z"
						      fill="#444444"/>
						<path
							d="M18.4272 7.13812C20.4003 7.13812 21.9999 5.54047 21.9999 3.56892C21.9999 1.59793 20.4003 0 18.4272 0C16.4542 0 14.8546 1.59793 14.8546 3.56892C14.8546 5.54047 16.4542 7.13812 18.4272 7.13812Z"
							fill="#F4805A"/>
					</svg>
				</HeaderRightAvatar>
			</HeaderRightIcons>
		</HeaderContainer>
	);
};

export default Header;