'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import Script from 'next/script';

import ReactQueryProvider from '@/providers/ReactQuery';

import '@/app/globals.css';

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
        <ReactQueryProvider>
          <div
            className={`${
              desktop ? 'w-screen h-screen' : 'w-[375px] h-[812px]'
            }  flex justify-center bg-white`}
          >
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
