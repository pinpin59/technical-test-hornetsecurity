import { createI18n } from "vue-i18n";
import en from "./locales/en";
import fr from "./locales/fr";

export const i18n = createI18n({
  legacy: false, // utilise la Composition API
  locale: "fr", // langue par défaut
  fallbackLocale: "en",
  messages: { en, fr },
});
