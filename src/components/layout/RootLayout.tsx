'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import ReactQueryProvider from '@/providers/ReactQuery';

const RootLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    if (pathname.includes('admin')) {
      setIsAdminPage(true);
    }
  }, [pathname]);

  return (
    <ReactQueryProvider>
      <div
        className={`${
          isAdminPage ? 'w-screen' : 'max-w-[768px] my-0 mx-auto'
        } bg-white h-screen`}
      >
        {children}
      </div>
    </ReactQueryProvider>
  );
};

export default RootLayout;
