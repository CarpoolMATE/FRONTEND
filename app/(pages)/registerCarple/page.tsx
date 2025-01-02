/* eslint-disable @next/next/no-img-element */
"use client";
import BasicMap from "@/app/components/map";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterCarple: React.FC = () => {
  const router = useRouter();
  const [start, setStart] = useState("");
  const [map, setMap] = useState(false);

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
        <div className="absolute left-[20px] top-[139.5px] w-[104px]   h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
        <div className="absolute left-[134.5px] top-[139.5px] w-[104px]   h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
        <div className="absolute left-[254.5px] top-[139.5px] w-[104px]   h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
      </div>
      <div className="mt-[134px] text-[#3c3c3c] text-2xl font-bold font-['Pretendard'] leading-9 mb-[21px]">
        출발지를 선택해주세요
      </div>
      <div className="text-[#b2b2b2] text-sm font-medium font-['Pretendard']  mb-[50px]">
        도착지는 대학교로 자동 설정됩니다
      </div>

      <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard'] mb-[10px]">
        출발 지역
      </div>
      <div className="relative w-full cursor-pointer">
        <svg
          onClick={() => {
            setMap(true);
          }}
          className="absolute left-[16.5px] top-[15px]"
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            id="Vector"
            d="M10 15.8906L7 14.3906M7 14.3906L3.89443 15.9434C2.56462 16.6083 1 15.6413 1 14.1546V5.62669C1 4.86915 1.428 4.17662 2.10557 3.83784L7 1.39062M7 14.3906V1.39062M7 1.39062L13 4.39062M13 4.39062L16.1056 2.83784C17.4354 2.17294 19 3.13993 19 4.62669V8.89062M13 4.39062V9.89062M17 15.3906V15.4006M19.121 17.5116C19.5406 17.0921 19.8265 16.5576 19.9423 15.9756C20.0581 15.3936 19.9988 14.7904 19.7717 14.2421C19.5447 13.6939 19.1602 13.2253 18.6668 12.8956C18.1734 12.566 17.5934 12.39 17 12.39C16.4066 12.39 15.8266 12.566 15.3332 12.8956C14.8398 13.2253 14.4553 13.6939 14.2283 14.2421C14.0012 14.7904 13.9419 15.3936 14.0577 15.9756C14.1735 16.5576 14.4594 17.0921 14.879 17.5116C15.0878 17.7208 15.3687 17.9817 15.7218 18.2945C16.4501 18.9398 17.5467 18.9357 18.2759 18.2913C18.6507 17.9601 18.9324 17.7002 19.121 17.5116Z"
            stroke="#007AFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
          }}
          placeholder="지도에서 선택"
          className="pl-[46px] w-full h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-3 inline-flex text-[#b2b2b2] text-lg font-medium font-['Pretendard']"
        />
      </div>

      <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard'] mt-[20px]">
        상세 탑승 장소
      </div>

      <input
        placeholder="예) ~역/편의점 앞"
        className="mt-[10px] w-full h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-3 inline-flex text-[#b2b2b2] text-lg font-medium font-['Pretendard']"
      />

      {start ? (
        <div
          onClick={() => {
            router.push("/registerCarple/firstStep");
          }}
          className="cursor-pointer mt-[223px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      ) : (
        <div className="mt-[223px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      )}
      {map && <BasicMap onClose={() => setMap(false)} />}
    </div>
  );
};

export default RegisterCarple;
