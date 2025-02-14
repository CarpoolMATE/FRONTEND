import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: 'pretendard',
        hancomSans: 'hancomSans',
        appleSD: 'appleSDGothicNeo',
      },
      colors: {
        primary: '#007AFF',
        error: '#E0302D',
        icon: '#505050',
      },
      textColor: {
        default: '#3C3C3C',
        title: '#000000D9',
        main: '#1A1A1A',
        placeholder: '#B2B2B2',
        sub: '#757575',
      },
      borderColor: {
        input: '#E9E9E9',
      },
    },
  },
  plugins: [],
} satisfies Config;
