import {INotification} from "../interfaces/notification.interface.ts";

interface NotificationsState {
	count: number;
	notifications: INotification[];
	loading: boolean;
	error: string | null;
}

export const notificationsInitialState: NotificationsState = {
	count: 0,
	notifications: [],
	loading: false,
	error: null,
};