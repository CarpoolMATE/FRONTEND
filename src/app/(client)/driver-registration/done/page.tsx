'use client';

import Link from 'next/link';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

const Done = () => {
  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5 text-center">
        <h1 className="text-2xl font-bold pt-12">
          드라이버 정보를
          <br />
          성공적으로 등록했어요!
        </h1>

        <div className="w-full flex justify-center items-center pt-[60px]">
          <Icon
            icon="CAR_DONE"
            className="text-[#BBD8FF] w-[215px] h-[186px]"
          />
        </div>
        <div className="pt-16 text-center text-icon text-lg font-bold">
          지금 바로 카풀을 모집해볼까요?
        </div>
      </div>

      <div className="mt-auto p-5 flex flex-col gap-9">
        <Link href={CLIENT_APP_ROUTES.HOME}>
          <div className="w-full flex gap-[8px] justify-center items-center">
            <span className="text-[#666666] text-sm font-medium">
              아뇨, 나중에 할게요
            </span>
            <Icon
              icon="CHEVRONS_RIGHT"
              className="text-[#666666] w-[7px] h-[10px]"
            />
          </div>
        </Link>

        <Link href={CLIENT_APP_ROUTES.CARPOOL_REGISTRATION}>
          <Button>카풀 모집하기</Button>
        </Link>
      </div>
    </section>
  );
};

export default Done;
