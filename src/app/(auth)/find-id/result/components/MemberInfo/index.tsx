'use client';

import { useSearchParams } from 'next/navigation';

const MemberInfo = () => {
  const searchParams = useSearchParams();

  const nickname = searchParams.get('nickname') || '';
  const memberId = searchParams.get('memberId') || '';

  return (
    <p className="text-2xl text-[#3C3C3C] font-medium text-center">
      {nickname}님의 아이디는
      <br />
      <span className="text-primary">{memberId}</span>
      입니다
    </p>
  );
};

export default MemberInfo;
