'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Button from '@/components/Button';
import ReservationCard from '@/app/(client)/home/components/ReservationCard';
import CarpoolFilter from '@/app/(client)/home/components/CarpoolFilter';
import CarpoolList from '@/app/(client)/home/components/CarpoolList';
import ProfileImage from '@/components/Image/Profile';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

const HomePage: React.FC = () => {
  const [driverModal, setDriverModal] = useState(false);

  const router = useRouter();

  return (
    <div className="px-5 flex flex-col justify-center items-center">
      <div className="h-16 py-4 justify-between items-center inline-flex w-full">
        <Button
          className="w-[117px] h-[40px] text-base font-normal"
          onClick={() => setDriverModal(true)}
        >
          카풀 생성하기
        </Button>

        <Link
          href={CLIENT_APP_ROUTES.PROFILE}
          className="cursor-pointer w-fit h-fit relative bg-[#f2f8ff] rounded-full overflow-hidden"
        >
          <ProfileImage size={38} url="https://placehold.co/38/png" />
        </Link>
      </div>

      <ReservationCard />
      <CarpoolFilter />
      <CarpoolList />

      {driverModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
          <div className="w-[335px] h-[397.32px] px-5 pt-10 pb-[25px] bg-white rounded-[20px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.06)] border-2 border-[#eaeaea]/50 flex-col justify-start items-center gap-[30px] inline-flex overflow-hidden">
            <div className="flex-col max-h-[243px] justify-start items-center gap-[35px] flex">
              <div className="text-center">
                <span className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-[31px]">
                  드라이버 활동을 위해서는
                  <br />
                </span>
                <span className="text-[#007aff] text-xl font-semibold font-['Pretendard'] leading-[31px]">
                  차량 등록
                </span>
                <span className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-[31px]">
                  이 필요합니다
                </span>
              </div>
              <div className=" w-[125.55px] h-[75.32px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="133"
                  height="75"
                  viewBox="0 0 133 83"
                  fill="none"
                >
                  <g id="Group" opacity="0.3">
                    <path
                      id="Vector"
                      d="M22.5559 66.8945H10.0004C6.23375 66.8945 3.72266 64.3834 3.72266 60.6168V41.7836C3.72266 36.1336 8.11707 31.1114 13.1393 29.8559C24.4392 26.717 41.3891 22.9504 41.3891 22.9504C41.3891 22.9504 49.5501 14.1616 55.2001 8.5116C58.3389 6.00051 62.1056 4.11719 66.5 4.11719H110.444C114.211 4.11719 117.35 6.62828 119.233 9.76715L128.022 27.9726C128.853 30.3972 129.277 32.9427 129.277 35.5059V60.6168C129.277 64.3834 126.766 66.8945 123 66.8945H110.444"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M97.8912 79.442C90.957 79.442 85.3357 73.8207 85.3357 66.8865C85.3357 59.9523 90.957 54.3311 97.8912 54.3311C104.825 54.3311 110.447 59.9523 110.447 66.8865C110.447 73.8207 104.825 79.442 97.8912 79.442Z"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M85.3343 66.8945H47.6679"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M35.1102 79.442C28.176 79.442 22.5548 73.8207 22.5548 66.8865C22.5548 59.9523 28.176 54.3311 35.1102 54.3311C42.0444 54.3311 47.6657 59.9523 47.6657 66.8865C47.6657 73.8207 42.0444 79.442 35.1102 79.442Z"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex-col justify-center items-center  flex">
                <div>
                  <span className="text-[#007aff] text-base font-medium font-['Pretendard'] leading-snug">
                    차량 등록
                  </span>
                  <span className="text-[#4f4f4f] text-base font-medium font-['Pretendard'] leading-snug">
                    을 하시겠어요?
                  </span>
                </div>
                <div className="text-[#4f4f4f] text-base font-medium font-['Pretendard'] leading-snug">
                  등록 후에도 패신저 활동이 가능해요
                </div>
              </div>
            </div>

            <div className="justify-center items-start gap-2.5 inline-flex">
              <div
                onClick={() => setDriverModal(false)}
                className="cursor-pointer h-[57px] px-[30px] py-[18px] bg-[#dadde1] rounded-[10px] justify-center items-center gap-2.5 flex"
              >
                <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
                  나중에
                </div>
              </div>
              <div
                onClick={() => {
                  router.push('/registerCar');
                }}
                className="cursor-pointer h-[57px] px-10 py-[18px] bg-[#007aff] rounded-[10px] justify-center items-center gap-2.5 flex"
              >
                <div className="text-white text-lg font-semibold font-['Pretendard']">
                  차량 등록
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
