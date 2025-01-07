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
      <div className="w-full bg-[#f7f7f7] h-screen pl-[300px]">
        <div className="flex justify-start bg-[#f7f7f7]  text-[#3c3c3c] text-4xl font-semibold font-['Pretendard'] leading-7 pt-[70px] mb-[50px]">
          예약 상세 정보
        </div>

        <div className="flex w-full gap-[20px] ">
          <div className="w-[750px] h-full flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[228px] px-[100px] py-[30px] bg-white rounded-[10px] flex-col justify-start items-start flex">
              <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
                <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  상태
                </div>
                <div className="justify-start items-center gap-[30px] flex">
                  <div className="text-center text-[#e0302d] text-xl font-semibold font-['Pretendard'] leading-7">
                    취소
                  </div>
                </div>
              </div>
              <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
                <div className="w-[100px] text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  등록일
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  12/27
                </div>
              </div>
            </div>
            <div className="self-stretch h-full px-[100px] py-[50px] bg-white rounded-[10px] flex-col justify-center items-start flex">
              <div className="self-stretch h-[84px] py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  출발지
                </div>
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  ㅇㅇ시ㅇㅇ동
                </div>
              </div>
              <div className="self-stretch py-7 border-b border-[#e0e0e0] justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  도착지
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  ㅇㅇ대학교
                </div>
              </div>
              <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  출발 시간
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  오전 1시 25분
                </div>
              </div>
              <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  탑승 장소
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  편의점 앞
                </div>
              </div>
              <div className="self-stretch py-7 border-b justify-between items-center inline-flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  비용
                </div>
                <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                  1200원
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-[750px] px-[100px] py-[30px] bg-white rounded-[10px] flex-col justify-center items-start gap-20 inline-flex">
            <div className="self-stretch h-[694px] flex-col justify-start items-start flex">
              <div className="self-stretch h-[158px] py-[25px] border-b border-[#e0e0e0] flex-col justify-start items-start gap-2.5 flex">
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
                    {"{이름}"}
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[158px] py-[25px] border-b border-[#e0e0e0] flex-col justify-start items-start gap-2.5 flex">
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
              <div className="self-stretch h-[378px] py-[25px] flex-col justify-start items-start gap-5 flex">
                <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                  패신저 (4/4)
                </div>
                <div className="self-stretch h-[280px] flex-col justify-start items-start flex">
                  <div className="self-stretch py-2.5 border-b justify-start items-center gap-[100px] inline-flex">
                    <div className="justify-start items-center gap-[30px] flex">
                      <div className="w-[50px] h-[50px] relative bg-[#f2f8ff] rounded-[113.64px]  overflow-hidden">
                        <img
                          className="w-[56.82px] h-[53.41px] left-[-3.41px] top-[-3.41px] absolute rounded-[113.64px]"
                          src="https://via.placeholder.com/57x53"
                          alt="img"
                        />
                      </div>
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        {"{이름}"}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch py-2.5 border-b justify-start items-center gap-[100px] inline-flex">
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
                          {"{이름}"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch py-2.5 border-b justify-start items-center gap-[100px] inline-flex">
                    <div className="justify-start items-center gap-[30px] flex">
                      <div className="w-[50px] h-[50px] relative bg-[#f2f8ff] rounded-[113.64px]  overflow-hidden">
                        <img
                          className="w-[56.82px] h-[53.41px] left-[-3.41px] top-[-3.41px] absolute rounded-[113.64px]"
                          src="https://via.placeholder.com/57x53"
                          alt="img"
                        />
                      </div>
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        {"{이름}"}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch py-2.5 border-b justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-[30px] flex">
                      <div className="w-[50px] h-[50px] relative opacity-50 bg-[#f2f8ff] rounded-[113.64px]  overflow-hidden">
                        <img
                          className="w-[56.82px] h-[53.41px] left-[-3.41px] top-[-3.41px] absolute rounded-[113.64px]"
                          src="https://via.placeholder.com/57x53"
                          alt="img"
                        />
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className="opacity-50 text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] line-through leading-7">
                          {"{이름}"}
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-[#e0302d] text-xl font-semibold font-['Pretendard'] leading-7">
                      예약 취소
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
