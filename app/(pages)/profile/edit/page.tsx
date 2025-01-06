/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const EditProfilePage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const which = searchParams.get("which");

  return (
    <div className="relative w-full px-[20px] pt-[140px]">
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
        <div className="absolute left-[141.5px] top-[52.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
          {which === "패신저" ? "프로필" : "차량 정보"}
        </div>
        {which === "패신저" ? (
          <div>
            <div className="w-[335px] h-[272px] flex-col justify-start items-center gap-[30px] inline-flex">
              <div className="w-20 h-20 relative">
                <img
                  className="w-20 h-20 left-0 top-0 absolute rounded-[100px]"
                  src="https://via.placeholder.com/80x80"
                  alt="img"
                />
                <div className="p-[3px] left-[56px] top-[56px] absolute bg-[#dadde1] rounded-[75px] justify-start items-start inline-flex">
                  <div className="w-[18px] h-[18px] relative" />
                </div>
              </div>
              <div className="h-[162px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex">
                  <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                      닉네임
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <input
                      placeholder="닉네임"
                      className="w-[241px] grow shrink basis-0 h-[51px] p-[15px] bg-[#f7f7f7] rounded-[10px] border border-[#dadada] justify-start items-center gap-3 flex text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]"
                    />

                    <div className="self-stretch px-[15px] py-2.5 bg-[#c3c3c3] rounded-[10px] justify-center items-center gap-2.5 flex">
                      <div className="text-white text-base font-medium font-['Pretendard']">
                        중복확인
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[71px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                      학교
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <input
                      placeholder="ㅇㅇ대학교"
                      className="w-[241px] grow shrink basis-0 h-[51px] p-[15px] bg-[#f7f7f7] rounded-[10px] border border-[#dadada] justify-start items-center gap-3 flex text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]"
                    />

                    <div className="w-full self-stretch px-3.5 py-2.5 bg-[#007aff] rounded-[10px] justify-center items-center gap-2.5 flex">
                      <div className="text-white text-base font-semibold font-['Pretendard']">
                        학교검색
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-[335px] h-[272px] flex-col justify-start items-center gap-[30px] inline-flex">
              <div className="w-20 h-20 relative  overflow-hidden">
                <div className="w-20 h-20 left-0 top-0 absolute bg-[#007aff] rounded-[100px]">
                  <div className="w-20 h-20 left-0 top-0 absolute">
                    <img
                      className="w-20 h-20 left-[80px] top-0 absolute origin-top-left rotate-180 rounded-[100px]"
                      src="https://via.placeholder.com/80x80"
                      alt="img"
                    />
                    <div className="h-6 p-[3px] left-[56px] top-[56px] absolute bg-[#dadde1] rounded-[75px] justify-start items-start inline-flex">
                      <div className="w-[18px] h-[18px] relative" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[162px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[71px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                      차량 번호
                    </div>
                  </div>
                  <div className="self-stretch h-[51px] p-[15px] bg-[#f7f7f7] rounded-[10px] border border-[#dadada] justify-start items-center gap-3 inline-flex">
                    <div className="text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]">
                      12가3456
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[71px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                      전화번호
                    </div>
                  </div>
                  <div className="self-stretch h-[51px] p-[15px] bg-[#f7f7f7] rounded-[10px] border border-[#dadada] justify-start items-center gap-3 inline-flex">
                    <div className="text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]">
                      010-1234-5678
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[322px]">
        <div className="text-white text-lg font-semibold font-['Pretendard']">
          수정하기
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
