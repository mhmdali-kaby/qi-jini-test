import {IProfile} from "../interfaces/profile.interface.ts";

interface ProfileState {
	info: IProfile;
	loading: boolean;
	error: string | null;
}

export const profileInitialState: ProfileState = {
	info: {},
	loading: false,
	error: null,
};