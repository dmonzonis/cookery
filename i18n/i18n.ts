import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import es from './locales/es';

i18n.translations = {
    es,
};

i18n.fallbacks = true;
i18n.locale = Localization.locale;
i18n.defaultLocale = 'es-ES';

export default i18n;
