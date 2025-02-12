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
        title: '#000000D9',
      },
    },
  },
  plugins: [],
} satisfies Config;
