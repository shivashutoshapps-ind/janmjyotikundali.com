import { Font } from '@react-pdf/renderer';

export const registerFonts = () => {
  Font.register({
    family: 'NotoSansDevanagari',
    fonts: [
      { src: '/fonts/NotoSansDevanagari-Regular.ttf' },
      { src: '/fonts/NotoSansDevanagari-Bold.ttf', fontWeight: 'bold' }
    ]
  });
};
