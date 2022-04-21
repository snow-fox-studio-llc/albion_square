import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: import.meta.env.DEV,
		fallbackLng: "en",
		load: "languageOnly",
		ns: ["adp-marketplace", "marketplace"],
		defaultNS: "marketplace",
		interpolation: {
			escapeValue: false,
		},
	});
