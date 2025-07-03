import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'QR Code Generator',
      inputPlaceholder: 'Enter text or URL',
      size: 'Size',
      foregroundColor: 'Foreground Color',
      backgroundColor: 'Background Color',
      download: 'Download',
      share: 'Share',
      downloadAs: 'Download as',
      shareVia: 'Share via',
      pixels: 'pixels',
      language: 'Language'
    }
  },
  es: {
    translation: {
      title: 'Generador de Código QR',
      inputPlaceholder: 'Ingrese texto o URL',
      size: 'Tamaño',
      foregroundColor: 'Color del frente',
      backgroundColor: 'Color del fondo',
      download: 'Descargar',
      share: 'Compartir',
      downloadAs: 'Descargar como',
      shareVia: 'Compartir por',
      pixels: 'píxeles',
      language: 'Idioma'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;