'use client';

import React from 'react';
import Link from 'next/link';

import Icon from '@/components/Icon';
import Button from '@/components/Button';

import { HEADER_HEIGHT } from '@/constants/common';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

const DoneReportPage: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center w-full"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      <h2 className="mt-12 text-center text-2xl font-bold">
        신고가 접수되었습니다.
      </h2>
      <Icon icon="DONE" className="mt-28 size-32 text-primary" />
      <div className="mt-12 text-center text-[#666666] text-base font-medium">
        <p>메이트 팀이 3일 내로 확인 후</p>
        <p>조치를 취할거예요</p>
      </div>

      <div className="w-full mt-auto p-5">
        <Link href={CLIENT_APP_ROUTES.PROFILE}>
          <Button>확인</Button>
        </Link>
      </div>
    </section>
  );
};

export default DoneReportPage;
