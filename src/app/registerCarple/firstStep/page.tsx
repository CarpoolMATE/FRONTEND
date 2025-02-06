// RegisterCarple.tsx
'use client';

import { TimePicker } from '@/components/timePickerDropdown';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterCarple: React.FC = () => {
  const router = useRouter();
  const [start, setStart] = useState('');
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(0);

  return (
    <div className="relative w-full px-[20px] pt-[57.5px]">
      <div className="flex top-[57.5px]">
        <svg
          onClick={() => {
            router.back();
          }}
          className="absolute left-[20px] top-[57.5px] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            id="Rectangle 882"
            d="M10 1.10938L1.82023 7.92585C1.39337 8.28157 1.39337 8.93718 1.82023 9.2929L10 16.1094"
            stroke="#505050"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute left-[141.5px] top-[52.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard']">
          카풀 생성하기
        </div>
        <div className="absolute left-[20px] top-[139.5px] w-[104px]   h-[5px] bg-[#007aff]  rounded-[15px]" />
        <div className="absolute left-[134.5px] top-[139.5px] w-[104px]   h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
        <div className="absolute left-[254.5px] top-[139.5px] w-[104px]   h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
      </div>
      <div className="mt-[134px] text-[#3c3c3c] text-2xl font-bold font-['Pretendard'] leading-9 mb-[80px]">
        출발 시간을 설정해주세요
      </div>

      <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard'] mb-[10px] ">
        출발 날짜
      </div>
      <div className="relative w-full cursor-pointer">
        <input
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
          }}
          placeholder="12월 27일"
          className=" w-full h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-3 inline-flex text-[#b2b2b2] text-lg font-medium font-['Pretendard']"
        />
      </div>

      <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard'] mt-[20px]">
        출발 시간
      </div>

      <TimePicker
        selectedHour={hour}
        selectedMinute={minute}
        onHourChange={setHour}
        onMinuteChange={setMinute}
      />

      <div className="text-[#a1a1a1] text-[13px] font-medium font-['Pretendard'] leading-tight mt-[16px]">
        여객자동차 운수사업법 제81조 1항에 따라 유료 카풀의 경우
        <br />
        오전 07:00-09:00 사이에 운행이 가능해요. 09:00 이후에는
        <br />
        운행이 종료돼야 해요. (휴일, 공휴일은 유료 카풀 불가)
      </div>

      {start && hour >= 0 && minute >= 0 ? (
        <div
          onClick={() => {
            router.push('/registerCarple/secondStep');
          }}
          className="cursor-pointer mt-[173px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      ) : (
        <div className="mt-[173px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterCarple;
