import en from "./i18n/en.json";
import ar from "./i18n/ar.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    ar,
  },
}));
