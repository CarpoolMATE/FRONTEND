import localFont from 'next/font/local';
import Script from 'next/script';

import RootLayout from '@/components/layout/RootLayout';

import '@/app/globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const hancomSans = localFont({
  src: '../../public/fonts/HancomSans-SemiBold.otf',
  weight: '400',
  variable: '--font-hancomSans',
});

const appleSDGothicNeo = localFont({
  src: '../../public/fonts/AppleSDGothicNeo.ttf',
  weight: '400',
  variable: '--font-appleSDGothicNeo',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOJSKEY}`}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${hancomSans.className} ${appleSDGothicNeo.className} ${pretendard.className} bg-gray-300`}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
