import Image from 'next/image';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Link from 'next/link';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

import { DestinationSummaryProps } from '@/app/(client)/home/components/DestinationSummary/types';

import { formatComma } from '@/utils/format';

const DestinationSummary = ({
  data: {
    capacity,
    cost,
    departureCoordinate,
    departureTime,
    reservationCount,
  },
  showMapIcon,
}: DestinationSummaryProps) => {
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
              <p className="text-base font-medium">{departureCoordinate}</p>
            </div>

            <div className="justify-start items-center gap-1.5 inline-flex">
              <Icon icon="CLOCK" className="text-[#888888]" />
              <p className="text-[#666666] text-sm font-medium">
                {format(departureTime, 'a hh시 mm분', { locale: ko })}
              </p>
            </div>
          </div>

          <div className="">
            <p className="grow shrink basis-0 text-base font-medium ">
              경운대학교
            </p>
          </div>
        </div>
        {showMapIcon && (
          <Link
            href={`https://map.kakao.com/?q=${departureCoordinate}`}
            target="_blank"
          >
            <Button intent="icon" className="absolute right-0 top-3">
              <Image
                width={25}
                height={25}
                src="/images/kakao-map.png"
                alt="kakao-map"
              />
            </Button>
          </Link>
        )}
      </div>

      <div className="self-stretch justify-start items-center inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <p className="text-placeholder text-sm font-medium tracking-tight">
            탑승 인원
          </p>
          <p className="font-medium">
            {showMapIcon ? `${reservationCount}/${capacity}` : `${capacity}명`}
          </p>
        </div>

        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <p className="text-placeholder text-sm font-medium tracking-tight">
            비용
          </p>
          <p className="font-medium">{formatComma(cost)}원</p>
        </div>
      </div>
    </>
  );
};

export default DestinationSummary;
