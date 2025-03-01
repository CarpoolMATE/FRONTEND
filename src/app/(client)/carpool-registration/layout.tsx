import { PropsWithChildren } from 'react';

import Header from '@/app/(auth)/components/Header';

const CarpoolRegistrationLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full relative">
      <Header />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default CarpoolRegistrationLayout;
