import { PropsWithChildren } from 'react';

import Header from '@/app/(auth)/components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full">
      <Header />

      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
