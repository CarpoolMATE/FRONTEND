import { PropsWithChildren, Suspense } from 'react';

import Spin from '@/components/Spin';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Suspense fallback={<Spin />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
