'use client';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Image from 'next/image';

const DestinationSummary = () => {
  return (
    <>
      <div className="self-stretch justify-start items-start gap-4 inline-flex relative">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center my-2">
          <div className="relative">
            <div className="absolute size-6 rounded-full bg-blue-line opacity-10 -top-2 -left-2"></div>
            <div className="size-2 rounded-full bg-blue-line"></div>
          </div>

          <div className="flex-1 w-[2px] bg-blue-line opacity-30"></div>

          <div className="relative">
            <div className="absolute size-6 rounded-full bg-blue-line opacity-10 -bottom-2 -left-2"></div>
            <div className="size-2 rounded-full bg-blue-line"></div>
          </div>
        </div>

        <div className="ml-10 flex-col flex gap-10">
          <div className="self-stretch flex-col justify-start items-start gap-3 flex">
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <p className="text-base font-medium ">홍대입구역 8번 출구</p>
            </div>

            <div className="justify-start items-center gap-1.5 inline-flex">
              <Icon icon="CLOCK" className="text-[#888888]" />
              <p className="text-[#666666] text-sm font-medium">오전 08:30</p>
            </div>
          </div>

          <div className="">
            <p className="grow shrink basis-0 text-base font-medium ">
              OO대학교
            </p>
          </div>
        </div>

        <Button intent="icon" className="absolute right-0 top-3">
          <Image
            width={25}
            height={25}
            src="/images/kakao-map.png"
            alt="kakao-map"
          />
        </Button>
      </div>

      <div className="self-stretch justify-start items-center inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <p className="text-placeholder text-sm font-medium tracking-tight">
            탑승 인원
          </p>
          <p className="font-medium">4/4</p>
        </div>

        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <p className="text-placeholder text-sm font-medium tracking-tight">
            비용
          </p>
          <p className="font-medium">1,500원</p>
        </div>
      </div>
    </>
  );
};

export default DestinationSummary;
