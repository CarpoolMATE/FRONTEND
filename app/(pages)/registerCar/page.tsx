/* eslint-disable @next/next/no-img-element */
"use client";
import { useVehicleStore } from "@/app/store/register";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const RegisterCarPage: React.FC = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Zustand store에서 필요한 상태와 액션을 가져옵니다
  const { imageUrl, setImage, clearImage } = useVehicleStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file); // Zustand store의 setImage 액션을 사용합니다
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-full px-[20px] pt-[57.5px]">
      <div className="flex top-[57.5px]">
        <svg
          onClick={() => {
            clearImage(); // 뒤로 가기 시 이미지 초기화
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
        <div className="absolute left-[20px] top-[139.5px] w-[161.5px] h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
        <div className="left-[193.5px] absolute top-[139.5px] w-[161.5px] h-[5px] bg-[#eaeaea]/95 rounded-[15px]" />
      </div>
      <div className="pt-[126px] text-[#3c3c3c] text-2xl font-bold font-['Pretendard']">
        카풀에 이용할
      </div>
      <div className=" text-[#3c3c3c] text-2xl font-bold font-['Pretendard']">
        자동차 사진을 올려주세요
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      <div className="w-full flex justify-center items-center mt-[20px]">
        {imageUrl ? (
          <div
            className="mt-[108px] w-[150px] h-[150px] rounded-[100px] overflow-hidden cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src={imageUrl}
              alt="Selected car"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className="mt-[108px] w-[150px] h-[150px] p-2.5 bg-[#f1f1f1] rounded-[100px] justify-center items-center gap-2.5 inline-flex cursor-pointer"
            onClick={handleImageClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                id="Union"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5149 2.85791C19.5149 1.75334 18.6195 0.85791 17.5149 0.85791C16.4103 0.85791 15.5149 1.75334 15.5149 2.85791V15.8979H2.46722C1.36265 15.8979 0.467224 16.7933 0.467224 17.8979C0.467224 19.0025 1.36265 19.8979 2.46722 19.8979H15.5149V32.9235C15.5149 34.0281 16.4103 34.9235 17.5149 34.9235C18.6195 34.9235 19.5149 34.0281 19.5149 32.9235V19.8979H32.5328C33.6374 19.8979 34.5328 19.0025 34.5328 17.8979C34.5328 16.7933 33.6374 15.8979 32.5328 15.8979H19.5149V2.85791Z"
                fill="#A1A1A1"
              />
            </svg>
          </div>
        )}
      </div>
      {imageUrl ? (
        <div
          onClick={() => router.push("/registerCar/firstStep")}
          className="cursor-pointer mt-[200px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      ) : (
        <div className="mt-[200px] w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
            다음
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterCarPage;
