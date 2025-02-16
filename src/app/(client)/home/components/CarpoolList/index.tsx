'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import ReservationModal from '@/app/(client)/home/components/Modal/ReservationModal';
import ProfileImage from '@/components/Image/Profile';
import Icon from '@/components/Icon';

const CarpoolList = () => {
  const noData = false;
  const [showModal, setShowModal] = useState<boolean>(false);

  if (noData) {
    return (
      <div className="w-full justify-center items-center flex flex-col mt-12">
        <div className="h-[150.32px] flex-col justify-start items-center gap-[45px] inline-flex">
          <p className="text-center text-xl font-semibold">
            현재 모집 중인 카풀이 없습니다
          </p>
          <div className="opacity-40 w-[125.55px] h-[75.32px] relative">
            <Icon
              icon="CAR"
              className="text-[#D1D5D9] w-[133px] h-[83px] opacity-40"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex-col justify-start items-start inline-flex">
        <div
          className="w-full cursor-pointer px-[15px] py-5 justify-start items-center gap-3 inline-flex border-t border-t-space"
          onClick={() => setShowModal(true)}
        >
          <ProfileImage url="https://placehold.co/44/png" />

          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
              <div className="text-[#666666] text-sm font-semibold font-['Pretendard'] leading-[14px] tracking-tight">
                OO동 출발{' '}
              </div>
              <div className="text-[#888888] text-xs font-normal font-['Pretendard'] leading-[14px] tracking-tight">
                |
              </div>
              <div className="text-[#666666] text-sm font-semibold font-['Pretendard'] leading-[14px] tracking-tight">
                1,500원
              </div>
            </div>
            <div className="text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]">
              오전 7시 30분
            </div>
          </div>
          <div className="px-3 py-2 bg-[#007aff] rounded-[15px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-medium font-['Pretendard'] tracking-wide">
              2/4
            </div>
          </div>
        </div>
      </div>

      {showModal &&
        createPortal(
          <ReservationModal onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
};

export default CarpoolList;
