'use client';

import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { useGetCarpoolList } from '@/app/(client)/home/apis/getCarpoolList';

import ReservationModal from '@/app/(client)/home/components/Modal/ReservationModal';
import ProfileImage from '@/components/Image/Profile';
import CarpoolEmpty from '@/app/(client)/home/components/CarpoolEmpty';

import { CarpoolSearchKey } from '@/app/(client)/home/components/CarpoolFilter/constants';
import { CarpoolType } from '@/app/(client)/home/apis/getCarpoolList/constants';

import { CarpoolDto } from '@/types/dtos/carpool';

import { formatComma } from '@/utils/format';
import { cn } from '@/utils/style';

const CarpoolList = () => {
  const searchParams = useSearchParams();

  const [carpool, setCarpool] = useState<CarpoolDto>();

  const filter =
    (searchParams.get(CarpoolSearchKey.Filter) as CarpoolType) ||
    CarpoolType.Default;

  const { data } = useGetCarpoolList({ type: filter });

  const handleClickCarpool = useCallback((carpool: CarpoolDto) => {
    setCarpool(carpool);
  }, []);

  // TODO: 예약 불가 시간 체크
  if (false) {
    return (
      <CarpoolEmpty>
        <div className="flex flex-col gap-2">
          <p className="text-center text-xl font-semibold">
            현재 카풀 예약 불가 시간입니다
          </p>
          <p className="text-center text-sm font-medium text-[#888888]">
            오전 10시부터 다음날 카풀 예약이 가능해요
          </p>
        </div>
      </CarpoolEmpty>
    );
  }

  if (!data?.length) {
    return (
      <CarpoolEmpty>
        <p className="text-center text-xl font-semibold">
          현재 모집 중인 카풀이 없습니다
        </p>
      </CarpoolEmpty>
    );
  }

  return (
    <>
      <ul>
        {data.map((item) => {
          const {
            carpoolId,
            driverImg,
            cost,
            departureTime,
            departureCoordinate,
            capacity,
            reservationCount,
          } = item;

          const isCapacityFull = reservationCount === capacity;

          return (
            <li
              key={carpoolId}
              className="w-full flex-col justify-start items-start inline-flex border-t border-t-space"
            >
              <div
                className={cn(
                  'w-full cursor-pointer px-[15px] py-5 justify-start items-center gap-3 inline-flex ',
                  isCapacityFull && 'opacity-50',
                )}
                onClick={() => handleClickCarpool(item)}
              >
                <ProfileImage url={driverImg} />

                <div
                  className={
                    'grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex'
                  }
                >
                  <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                    <div className="text-[#666666] text-sm font-semibold leading-[14px] tracking-tight">
                      {departureCoordinate} 출발{' '}
                    </div>
                    <div className="text-[#888888] text-xs font-normal leading-[14px] tracking-tight">
                      |
                    </div>
                    <div className="text-[#666666] text-sm font-semibold leading-[14px] tracking-tight">
                      {formatComma(cost)}원
                    </div>
                  </div>
                  <div className="text-[#3c3c3c] text-base font-medium leading-[14px]">
                    {format(departureTime, 'a h시 mm분', { locale: ko })}
                  </div>
                </div>
                <div
                  className={cn(
                    'px-3 py-2  rounded-[15px] justify-center items-center gap-2.5 flex',
                    isCapacityFull ? 'bg-gray' : 'bg-primary',
                  )}
                >
                  <div className="text-white text-base font-medium tracking-wide">
                    {reservationCount}/{capacity}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {carpool &&
        createPortal(
          <ReservationModal
            data={carpool}
            onClose={() => setCarpool(undefined)}
          />,
          document.body,
        )}
    </>
  );
};

export default CarpoolList;
