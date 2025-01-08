import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from './local/ar.json'

i18n.use(initReactI18next).init({
	resources: {
		ar
	},
	lng: "ar",
});