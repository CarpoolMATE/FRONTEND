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
        <div className=" cursor-pointer pt-[5px] justify-start items-center gap-[120px] flex ">
          <div
            onClick={() => router.push("/admin/main")}
            className="opacity-50 text-white text-2xl font-bold font-['Pretendard'] leading-[38.40px]"
          >
            회원 관리
          </div>
          <div
            onClick={() => router.push("/admin/promise")}
            className="cursor-pointer  text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]"
          >
            예약 관리
          </div>
          <div className="cursor-pointer opacity-50 text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]">
            신고 관리
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f7f7f7] h-screen pl-[100px]">
        <div className="flex justify-start bg-[#f7f7f7]  text-[#3c3c3c] text-4xl font-semibold font-['Pretendard'] leading-7 pt-[70px] mb-[50px]">
          예약 상세 정보
        </div>

        <div className="h-[376px] px-[100px] w-full py-5 bg-white rounded-[10px] justify-start items-start gap-[150px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                카풀 ID
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                120
              </div>
            </div>
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                등록일
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                12/27
              </div>
            </div>
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                출발 일자
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                2024.12.28 08:30 AM
              </div>
            </div>
            <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                신고 여부
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                접수됨
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                출발지
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                OO시 OO동
              </div>
            </div>
            <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                도착지
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                OO대학교
              </div>
            </div>
            <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
              <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                비용
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                1,500원
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[324px] px-[100px] py-5 bg-white rounded-[10px] justify-start items-center gap-[150px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[142px] py-5 border-b border-[#e0e0e0] flex-col justify-start items-start gap-1 flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                드라이버
              </div>
              <div className="py-2.5 justify-start items-center gap-[30px] inline-flex">
                <img
                  className="w-[50px] h-[50px] relative rounded-[100px]"
                  src="https://via.placeholder.com/50x50"
                  alt="img"
                />
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  {"{이름"}
                </div>
              </div>
            </div>
            <div className="self-stretch h-[142px] py-5 border-b flex-col justify-start items-start gap-1 flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                차량 정보
              </div>
              <div className="py-2.5 justify-start items-center gap-[30px] inline-flex">
                <div className="w-[50px] h-[50px] relative bg-[#007aff] rounded-[62.50px]"></div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  12가3456
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 py-5 flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
              패신저 (4/4)
            </div>
            <div className="self-stretch h-[150px] flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[70px] py-2.5 border-b justify-start items-center gap-[100px] flex">
                  <div className="justify-start items-center gap-[30px] flex">
                    <div className="w-[50px] h-[50px] relative bg-[#f2f8ff] rounded-[113.64px]  overflow-hidden">
                      <img
                        className="w-[56.82px] h-[53.41px] left-[-3.41px] top-[-3.41px] absolute rounded-[113.64px]"
                        src="https://via.placeholder.com/57x53"
                        alt="img"
                      />
                    </div>
                    <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                      {"{이름"}
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[70px] py-2.5 border-b justify-start items-center gap-[100px] flex">
                  <div className="justify-start items-center gap-[30px] flex">
                    <div className="w-[50px] h-[50px] relative bg-[#f2f8ff] rounded-[113.64px]  overflow-hidden">
                      <img
                        className="w-[56.82px] h-[53.41px] left-[-3.41px] top-[-3.41px] absolute rounded-[113.64px]"
                        src="https://via.placeholder.com/57x53"
                        alt="img"
                      />
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        {"{이름"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[70px] py-2.5 border-b justify-start items-center gap-[100px] flex">
                  <div className="justify-start items-center gap-[30px] flex">
                    <div className="w-[50px] h-[50px] relative bg-[#f2f8ff] rounded-[113.64px]  overflow-hidden">
                      <img
                        className="w-[56.82px] h-[53.41px] left-[-3.41px] top-[-3.41px] absolute rounded-[113.64px]"
                        src="https://via.placeholder.com/57x53"
                        alt="img"
                      />
                    </div>
                    <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                      {"{이름"}
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[70px] py-2.5 border-b justify-start items-center gap-[100px] flex">
                  <div className="justify-start items-center gap-[30px] flex">
                    <div className="w-[50px] h-[50px] relative bg-[#f2f8ff] rounded-[113.64px]  overflow-hidden">
                      <img
                        className="w-[56.82px] h-[53.41px] left-[-3.41px] top-[-3.41px] absolute rounded-[113.64px]"
                        src="https://via.placeholder.com/57x53"
                        alt="img"
                      />
                    </div>
                    <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                      {"{이름"}
                    </div>
                  </div>
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
