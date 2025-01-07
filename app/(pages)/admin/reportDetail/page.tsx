"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React from "react";

const UserDetailPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[118px] px-[200px] pt-[30px] pb-[35px] bg-[#3c3c3c] justify-start items-center gap-[150px] inline-flex">
        <div
          className="justify-start items-center gap-2.5 flex cursor-pointer"
          onClick={() => router.push("/admin")}
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
            className="opacity-50 text-white text-2xl font-bold font-['Pretendard'] leading-[38.40px]"
          >
            회원 관리
          </div>
          <div
            onClick={() => router.push("/admin/promise")}
            className="cursor-pointer opacity-50 text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]"
          >
            예약 관리
          </div>
          <div className="cursor-pointer  text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]">
            신고 관리
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f7f7f7] h-screen pl-[300px]">
        <div className="flex justify-start bg-[#f7f7f7]  text-[#3c3c3c] text-4xl font-semibold font-['Pretendard'] leading-7 pt-[70px] mb-[50px]">
          상세 신고 내역
        </div>

        <div className="flex w-[1520px] gap-[20px] flex-col ">
          <div className="h-[148px] py-[50px] bg-white rounded-[10px] justify-start items-center inline-flex">
            <div className="grow shrink basis-0 h-12 px-[100px] py-2.5 justify-between items-center flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                신고일자
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                241228
              </div>
            </div>
            <div className="grow shrink basis-0 h-12 px-[100px] py-2.5 border-l border-r border-[#e0e0e0] justify-between items-center flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                신고자
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                김OO
              </div>
            </div>
            <div className="grow shrink basis-0 h-12 px-[100px] py-2.5  justify-between items-center flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                신고자 ID
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                matecarpool
              </div>
            </div>
          </div>
          <div className="h-[404px] px-[100px] py-[50px] bg-white rounded-[10px] flex-col justify-center items-start inline-flex">
            <div className="self-stretch h-[136px] py-[30px] border-b border-[#e0e0e0] flex-col justify-start items-start gap-5 flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                제목
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                드라이버가 나타나지 않았어요
              </div>
            </div>
            <div className="self-stretch h-[168px] py-[30px] flex-col justify-start items-start gap-5 flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                내용
              </div>
              <div className="self-stretch text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-[30px]">
                12월 22일 오전 8시 카풀 예약이 확정되어 OOO 드라이버와
                이용하기로 했습니다. 하지만 드라이버가 약속된 시간에 나타나지
                않았으며, 사전 연락도 없었습니다. 이로 인해 저를 포함한 탑승자
                3명이 모두 지각하게 되었습니다. 카풀 서비스의 신뢰도를 심각하게
                훼손한 사례로, 이에 대한 적절한 조치가 필요합니다.
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
