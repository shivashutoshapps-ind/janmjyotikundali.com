import { Font } from '@react-pdf/renderer';

export const registerFonts = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  Font.register({
    family: 'NotoSansDevanagari',
    fonts: [
      { src: `${origin}/fonts/NotoSansDevanagari-Regular.ttf` },
      { src: `${origin}/fonts/NotoSansDevanagari-Bold.ttf`, fontWeight: 'bold' }
    ]
  });
};
