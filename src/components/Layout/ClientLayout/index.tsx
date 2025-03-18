'use client';

import { PropsWithChildren, useEffect } from 'react';

import { useGetMember } from '@/app/(client)/apis/getMember';

import { useMemberStore } from '@/store/member';

const ClientLayout = ({ children }: PropsWithChildren) => {
  const { data } = useGetMember();

  const { setMember } = useMemberStore();

  useEffect(() => {
    if (data) {
      setMember(data);
    }
  }, [data, setMember]);

  return <div className="bg-white min-h-full h-auto">{children}</div>;
};

export default ClientLayout;
