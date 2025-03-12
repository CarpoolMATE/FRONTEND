import { PropsWithChildren } from 'react';

import ReactQueryProvider from '@/providers/ReactQuery';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <section className="max-w-[768px] my-0 mx-auto bg-white h-screen">
        {children}
      </section>
    </ReactQueryProvider>
  );
};

export default RootLayout;
