/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AdminPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[118px] px-[200px] pt-[30px] pb-[35px] bg-[#3c3c3c] justify-start items-center gap-[150px] inline-flex  ">
        <div
          className="justify-start items-center gap-2.5 flex"
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
        <div className="pt-[5px] justify-start items-center gap-[120px] flex ">
          <div
            onClick={() => router.push("/admin/main")}
            className="opacity-50 cursor-pointer text-white text-2xl font-bold font-['Pretendard'] leading-[38.40px]"
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
      <div className="w-full h-screen jusity-center items-center flex-col inline-flex bg-[#f7f7f7] pt-[70px]">
        <div className="mx-[200px] w-[1520px] flex justify-center items-center flex-col">
          <div className="text-[#3c3c3c] text-4xl font-semibold font-['Pretendard'] leading-7  mb-[20px]">
            신고 관리
          </div>

          <div className="h-[90px] w-[1520px] py-5 justify-start items-center  inline-flex bg-white rounded-[10px] pl-[140px]">
            <div className="w-[180px] h-[50px] justify-start items-center gap-2.5 flex">
              <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                신고일자
              </div>
            </div>
            <div className="justify-start items-start  flex">
              <div className="justify-start items-center flex">
                <div className="w-[180px] h-[50px] justify-start items-center gap-2.5 flex">
                  <div className="text-center text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    신고자
                  </div>
                </div>
                <div className="w-[180px] h-[50px] justify-start items-center gap-2.5 flex">
                  <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    신고자 ID
                  </div>
                </div>
                <div className="w-[180px] h-[50px] justify-start items-center gap-2.5 flex">
                  <div className="text-center text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    제목
                  </div>
                </div>
              </div>
            </div>
          </div>

          {[1, 2, 3, 4, 5].map((el, index) => {
            return (
              <div
                key={index}
                className="w-[1520px] flex items-center pl-[60px] border-t border-[#e0e0e0] py-[26px] bg-white"
              >
                <div className="ml-[80px] text-center  text-xl font-semibold font-['Pretendard'] leading-7">
                  24/12/22
                </div>
                <div className="ml-[60px] w-[992.37px] h-[50px] justify-start items-start  inline-flex">
                  <div className="justify-start items-center flex">
                    <div className="w-[180px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        김ㅇㅇㅇ
                      </div>
                    </div>
                    <div className="w-[180px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex ml-[100px] mr-[150px]">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        메이트
                      </div>
                    </div>
                    <div className="w-full h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        드라이버가 나타나지 않았어요
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => router.push(`/admin/reportDetail?id=1`)}
                  className="ml-[100px] cursor-pointer h-10 pl-3 pr-2.5 py-1.5 rounded-lg border border-[#dadada] justify-start items-center gap-3 inline-flex"
                >
                  <div className="opacity-60 text-center text-[#3c3c3c] text-lg font-medium font-['Pretendard'] leading-7">
                    상세 정보
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="none"
                  >
                    <path
                      id="Rectangle 882"
                      d="M1 1L5.88953 4.25968C6.4178 4.61187 6.4178 5.38813 5.88952 5.74032L1 9"
                      stroke="#B2B2B2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
