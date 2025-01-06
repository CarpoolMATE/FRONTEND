"use client";
import Document from "@/app/components/document";
/* eslint-disable @next/next/no-img-element */
import SegmentControl from "@/app/components/segment";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [which, setWhich] = useState("패신저");

  return (
    <div className="relative w-full px-[20px] pt-[40.5px] flex flex-col items-center overflow-y-auto hide-scrollbar">
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
      </div>
      <SegmentControl setWhich={setWhich} which={which} />
      <div className="w-[375px] h-[277px] px-4 pt-5 pb-[25px] bg-white flex-col justify-start items-center gap-5 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="justify-start items-start flex" />
          <div className="grow shrink basis-0 h-[30px] justify-center items-center gap-1 flex">
            <div className="text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
              프로필
            </div>
          </div>
          <div
            onClick={() => router.push(`/profile/edit?which=${which}`)}
            className="cursor-pointer text-[#b2b2b2] text-base font-medium font-['Pretendard'] leading-[14px]"
          >
            수정
          </div>
        </div>
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
        <div className="w-full h-[82px] flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-[#b2b2b2] text-base font-medium font-['Pretendard'] leading-[14px]">
              닉네임
            </div>
            <div className="text-[#191919] text-base font-medium font-['Pretendard'] leading-[14px]">
              {"{이름}"}
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-[#b2b2b2] text-base font-medium font-['Pretendard'] leading-[14px]">
              아이디
            </div>
            <div className="text-[#191919] text-base font-medium font-['Pretendard'] leading-[14px]">
              matecarpool
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-[#b2b2b2] text-base font-medium font-['Pretendard'] leading-[14px]">
              학교
            </div>
            <div className="text-[#191919] text-base font-medium font-['Pretendard'] leading-[14px]">
              OO대학교
            </div>
          </div>
        </div>
      </div>
      <div className="text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
        {which === "패신저" ? "최근 탑승 목록" : "최근 운행 목록"}
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <Document />
      </div>
    </div>
  );
};

export default ProfilePage;
