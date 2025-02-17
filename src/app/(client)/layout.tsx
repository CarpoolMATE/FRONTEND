import { PropsWithChildren } from 'react';

import { getMember } from '@/app/(client)/apis/getMember';

import ClientLayout from '@/components/Layout/ClientLayout';

const Layout = async ({ children }: PropsWithChildren) => {
  const data = await getMember();

  return <ClientLayout member={data}>{children}</ClientLayout>;
};

export default Layout;
