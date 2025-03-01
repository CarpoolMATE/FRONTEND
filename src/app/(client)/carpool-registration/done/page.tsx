'use client';

import Link from 'next/link';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

const Done = () => {
  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5 text-center">
        <h1 className="text-2xl font-bold pt-12">
          카풀을 성공적으로 생성했어요!
        </h1>
        <div className="w-full flex justify-center items-center pt-[60px]">
          <Icon
            icon="CAR_DONE"
            className="text-[#BBD8FF] w-[215px] h-[186px]"
          />
        </div>
      </div>

      <div className="mt-auto p-5 flex flex-col gap-9">
        <Link href={CLIENT_APP_ROUTES.HOME}>
          <Button>확인</Button>
        </Link>
      </div>
    </section>
  );
};

export default Done;
