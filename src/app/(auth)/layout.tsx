import { PropsWithChildren } from 'react';

import Header from '@/app/(auth)/components/Header';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
    </div>
  );
};

export default AuthLayout;
