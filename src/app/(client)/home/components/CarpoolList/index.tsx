'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import ReservationModal from '@/app/(client)/home/components/Modal/ReservationModal';
import ProfileImage from '@/components/Image/Profile';

const CarpoolList = () => {
  const noData = false;
  const [showModal, setShowModal] = useState<boolean>(false);

  if (noData) {
    return (
      <div className="w-[375px] h-[504px] px-5 flex-col justify-center items-center inline-flex">
        <div className="h-[150.32px] flex-col justify-start items-center gap-[45px] inline-flex">
          <div className="text-center text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-[30px]">
            현재 모집 중인 카풀이 없습니다
          </div>
          <div className="opacity-40 w-[125.55px] h-[75.32px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="133"
              height="83"
              viewBox="0 0 133 83"
              fill="none"
            >
              <g id="Group" opacity="0.4">
                <path
                  id="Vector"
                  d="M22.5559 66.2773H10.0004C6.23375 66.2773 3.72266 63.7662 3.72266 59.9996V41.1664C3.72266 35.5164 8.11707 30.4943 13.1393 29.2387C24.4392 26.0998 41.3891 22.3332 41.3891 22.3332C41.3891 22.3332 49.5501 13.5444 55.2001 7.89441C58.3389 5.38332 62.1056 3.5 66.5 3.5H110.444C114.211 3.5 117.35 6.01109 119.233 9.14996L128.022 27.3554C128.853 29.78 129.277 32.3255 129.277 34.8887V59.9996C129.277 63.7662 126.766 66.2773 123 66.2773H110.444"
                  stroke="#D1D5D9"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M97.8912 78.8248C90.957 78.8248 85.3357 73.2035 85.3357 66.2693C85.3357 59.3351 90.957 53.7139 97.8912 53.7139C104.825 53.7139 110.447 59.3351 110.447 66.2693C110.447 73.2035 104.825 78.8248 97.8912 78.8248Z"
                  stroke="#D1D5D9"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M85.3343 66.2773H47.6679"
                  stroke="#D1D5D9"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_4"
                  d="M35.1102 78.8248C28.176 78.8248 22.5548 73.2035 22.5548 66.2693C22.5548 59.3351 28.176 53.7139 35.1102 53.7139C42.0444 53.7139 47.6657 59.3351 47.6657 66.2693C47.6657 73.2035 42.0444 78.8248 35.1102 78.8248Z"
                  stroke="#D1D5D9"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
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
