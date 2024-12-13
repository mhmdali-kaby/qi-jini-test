import {ISplash} from "../interfaces/splash.interface.ts";

interface SplashState {
	splashes: ISplash[];
	loading: boolean;
	error: string | null;
}

export const splashInitialState: SplashState = {
	splashes: [],
	loading: false,
	error: null,
};