import React, {useEffect} from 'react';
import Header from "../../components/header";
import {Container} from "../../styles/styled.ts";
import {
	NotificationContainer,
	NotificationContent,
	NotificationImage,
	NotificationMessage,
	NotificationsContainer,
	NotificationTime,
	NotificationTitle
} from "./styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getNotifications} from "../../store/actions/notifications.actions.ts";

const NotificationsView: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {notifications, loading} = useSelector((state: RootState) => state.notificationsReducer);

	useEffect(() => {
		dispatch(getNotifications());
	}, [dispatch]);

	return (
		<>
			<Header/>
			<Container>
				<NotificationTitle>
					الاشعارات
				</NotificationTitle>
				{!loading && notifications.length > 0 && (
					<NotificationsContainer>
						{notifications.map((notification, index) => (
							<NotificationContainer key={index} $read={notification.read}>
								<NotificationContent>
									<NotificationMessage>{notification.message}</NotificationMessage>
									<NotificationImage src={notification.image}/>
								</NotificationContent>
								<NotificationTime>
									{notification.time}
								</NotificationTime>
							</NotificationContainer>
						))}
					</NotificationsContainer>
				)}
			</Container>
		</>
	);
};

export default NotificationsView;