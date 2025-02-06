'use client';

import '@/app/globals.css';
import localFont from 'next/font/local';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.ttf',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    if (pathname.includes('admin')) {
      setDesktop(true);
    }
  }, [pathname]);

  return (
    <html lang="ko">
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOJSKEY}`}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${pretendard.variable} w-full h-screen flex justify-center items-center bg-black`}
      >
        <div
          className={`${
            desktop ? 'w-screen h-screen' : 'w-[375px] h-[812px]'
          }  flex justify-center bg-white`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
