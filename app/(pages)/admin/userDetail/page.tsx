"use client";
/* eslint-disable @next/next/no-img-element */
import ToggleSwitch from "@/app/components/toggle";
import { useRouter } from "next/navigation";
import React from "react";

const UserDetailPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[118px] px-[200px] pt-[30px] pb-[35px] bg-[#3c3c3c] justify-start items-center gap-[150px] inline-flex">
        <div
          className="justify-start items-center gap-2.5 flex"
          onClick={() => router.push("/admin/main")}
        >
          <div className="text-center">
            <span className="text-[#007aff] text-[40px] font-normal font-['Hancom Sans SemiBold']">
              mate
            </span>
            <span className="text-white text-[40px] font-normal font-['Hancom Sans SemiBold']">
              admin
            </span>
          </div>
        </div>
        <div className="cursor-pointer pt-[5px] justify-start items-center gap-[120px] flex ">
          <div
            onClick={() => router.push("/admin/main")}
            className="text-white text-2xl font-bold font-['Pretendard'] leading-[38.40px]"
          >
            회원 관리
          </div>
          <div
            onClick={() => router.push("/admin/promise")}
            className="cursor-pointer opacity-50 text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]"
          >
            예약 관리
          </div>
          <div className="cursor-pointer opacity-50 text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]">
            신고 관리
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f7f7f7] h-screen pl-[300px]">
        <div className="flex justify-start bg-[#f7f7f7]  text-[#3c3c3c] text-4xl font-semibold font-['Pretendard'] leading-7 pt-[70px] mb-[50px]">
          회원 상세 정보
        </div>

        <div className="flex w-full gap-[20px] ">
          <div className="h-[600px] w-[750px] px-[100px] py-[50px] bg-white rounded-[10px] flex-col justify-center items-start inline-flex">
            <div className="self-stretch h-[84px] py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                프로필 이미지
              </div>
              <img
                className="w-[50px] h-[50px] relative rounded-[100px]"
                src="https://via.placeholder.com/50x50"
                alt="img"
              />
            </div>
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                이름
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                김OO
              </div>
            </div>
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                ID
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                matecarpool
              </div>
            </div>
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                학교
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                OO대학교
              </div>
            </div>
            <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                카풀 이용 횟수
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                11
              </div>
            </div>
          </div>
          <div className="w-[750px] h-[600px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[228px] px-[100px] py-[30px] bg-white rounded-[10px] flex-col justify-start items-start flex">
              <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
                <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  상태
                </div>
                <div className="justify-start items-center gap-[30px] flex">
                  <ToggleSwitch initialState={true} />
                </div>
              </div>
              <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
                <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  회원가입일
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  12/27
                </div>
              </div>
            </div>
            <div className="self-stretch h-[352px] px-[100px] py-[50px] bg-white rounded-[10px] flex-col justify-center items-start flex">
              <div className="self-stretch h-[84px] py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  차량 이미지
                </div>

                <img
                  className="w-[50px] h-[50px]  rounded-[62.50px]"
                  src="https://via.placeholder.com/50x50"
                  alt="img"
                />
              </div>
              <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  차량 번호
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  12가3456
                </div>
              </div>
              <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  전화번호
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  010-1234-5678
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default UserDetailPage;
