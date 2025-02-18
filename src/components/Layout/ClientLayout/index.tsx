'use client';

import { PropsWithChildren, useEffect } from 'react';

import { useMemberStore } from '@/store/member';

import { MemberDto } from '@/types/dtos/member';

type ClientLayoutProps = {
  member: MemberDto;
} & PropsWithChildren;

const ClientLayout = ({ member, children }: ClientLayoutProps) => {
  const { setMember } = useMemberStore();

  useEffect(() => {
    setMember(member);
  }, [member, setMember]);

  return children;
};

export default ClientLayout;
