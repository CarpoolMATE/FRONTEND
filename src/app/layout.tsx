import localFont from 'next/font/local';

import RootLayout from '@/components/Layout/RootLayout';

import { cn } from '@/utils/style';

import '@/app/globals.css';

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

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        className={cn(
          hancomSans.className,
          appleSDGothicNeo.className,
          pretendard.className,
          'bg-gray-300',
        )}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
