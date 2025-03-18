import { PropsWithChildren } from 'react';

import ReactQueryProvider from '@/providers/ReactQuery';

import { GlobalModal } from '@/components/Modal';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <section className="max-w-[768px] my-0 mx-auto h-screen">
        {children}
        <GlobalModal />
      </section>
    </ReactQueryProvider>
  );
};

export default RootLayout;
