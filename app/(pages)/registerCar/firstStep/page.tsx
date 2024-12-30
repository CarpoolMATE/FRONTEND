/* eslint-disable @next/next/no-img-element */
"use client";
import { useVehicleStore } from "@/app/store/register";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterCarPage: React.FC = () => {
  const router = useRouter();

  // Zustand store에서 첫 번째 차량번호와 설정 함수를 가져옵니다
  const { vehicleNumber1: carNumber, setVehicleNumber } = useVehicleStore();

  const handleCarNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleNumber(1, e.target.value);
  };

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
          드라이버 등록
        </div>
        <div className="absolute left-[20px] top-[139.5px] w-[161.5px] h-[5px] bg-[#007aff] rounded-[15px]" />
        <div className="left-[193.5px] absolute top-[139.5px] w-[161.5px] h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
      </div>
      <div className="pt-[126px] text-[#3c3c3c] text-2xl font-bold font-['Pretendard']">
        카풀 차량의
      </div>
      <div className=" text-[#3c3c3c] text-2xl font-bold font-['Pretendard']">
        번호를 입력해주세요
      </div>

      <div className="mt-[50px] text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
        차량 번호
      </div>

      <input
        value={carNumber}
        onChange={handleCarNumberChange}
        placeholder="123가4568"
        className="mt-[10px] h-[51px] p-[15px] bg-[#f7f7f7] rounded-[10px] border border-[#dadada] w-[335px]"
      />

      {carNumber ? (
        <div
          onClick={() => {
            router.push("/registerCar/secondStep");
          }}
          className="cursor-pointer mt-[363px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      ) : (
        <div className="mt-[363px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterCarPage;
