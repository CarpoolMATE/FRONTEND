import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      {children}
    </section>
  );
};

export default AuthLayout;
