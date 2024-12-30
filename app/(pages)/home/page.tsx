/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const HomePage: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState("빠른 시간순");
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [check, setCheck] = useState<boolean>(false);
  const [detailModal, setDetailModal] = useState(false);

  const [driverModal, setDriverModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setModal]);

  return (
    <div className="pt-[60px] px-[20px] flex flex-col justify-center items-center  flex-1">
      <div className="h-[69px] px-5 py-[15px] justify-between items-center inline-flex w-full">
        <div
          onClick={() => setDriverModal(true)}
          className="cursor-pointer px-[15px] py-3.5 rotate-180 bg-[#007aff] rounded-xl flex-col justify-center items-center gap-2.5 inline-flex"
        >
          <div className="rotate-180 text-white text-base font-semibold font-['Pretendard']">
            카풀 생성하기
          </div>
        </div>
        <div className="w-[38px] h-[38px] relative bg-[#f2f8ff] rounded-[105.56px]  overflow-hidden">
          <img
            className="w-[44.33px] h-[44.33px] left-[-3.17px] top-[-3.17px] absolute rounded-[105.56px]"
            src="https://via.placeholder.com/44x44"
            alt="img"
          />
        </div>
      </div>
      <div className="w-[335px] min-h-[147px] pb-2.5 bg-white rounded-[20px] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.08)] border border-[#e9e9e9] flex-col justify-center items-center gap-[15px] inline-flex">
        <div className="text-[#3c3c3c] text-lg font-semibold font-['Pretendard'] leading-[27px]">
          현재 예약 중인 카풀이 없습니다
        </div>
        <div className="text-[#b2b2b2] text-sm font-medium font-['Pretendard']">
          내일의 카풀을 예약하거나 모집해보세요
        </div>
      </div>
      <div className="w-[375px] h-[130px] p-5 border-b flex-col justify-start items-start gap-[25px] inline-flex">
        <div>
          <span className="text-[#007aff] text-lg font-semibold font-['Pretendard']">
            12/27(금)
          </span>
          <span className="text-[#3c3c3c] text-lg font-semibold font-['Pretendard']">
            의 카풀 목록
          </span>
        </div>
        <div className="self-stretch justify-between items-center inline-flex relative z-10">
          <div className="px-[5px] justify-start items-center gap-3 flex">
            <input
              className="w-[14.60px] h-[14.60px] relative rounded border border-[#e9e9e9]"
              onChange={() => setCheck(!check)}
              type="checkbox"
            />

            <div className="text-[#757575] text-sm font-medium font-['Pretendard']">
              모집 중인 카풀만 보기
            </div>
          </div>
          <div
            className="justify-start items-center gap-2.5 flex cursor-pointer"
            onClick={() => setModal(!modal)}
          >
            <div className="text-[#757575] text-sm font-medium font-['Pretendard'] ">
              {sort}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="5"
              viewBox="0 0 7 5"
              fill="none"
            >
              <path
                id="Rectangle 882"
                d="M6 0.800781L3.5 3.80078L1 0.800781"
                stroke="#767676"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {modal && (
            <div
              ref={modalRef}
              className="bottom-[-85px] z-10 absolute right-[-10px] h-[79px] px-[18px] py-[15px] bg-white rounded-[10px] shadow-[3px_3px_8px_0px_rgba(0,0,0,0.10)] border border-[#e9e9e9] flex-col justify-center items-end gap-[15px] inline-flex"
            >
              <div
                onClick={() => {
                  setModal(false);
                  setSort("빠른 시간순");
                }}
                className={`${
                  sort === "빠른 시간순" ? "text-[#3c3c3c]" : "text-[#b2b2b2]"
                } cursor-pointer  text-sm font-medium font-['Pretendard']`}
              >
                빠른 시간순
              </div>
              <div
                onClick={() => {
                  setModal(false);
                  setSort("낮은 요금순");
                }}
                className={`${
                  sort === "낮은 요금순" ? "text-[#3c3c3c]" : "text-[#b2b2b2]"
                } cursor-pointer  text-sm font-medium font-['Pretendard']`}
              >
                낮은 요금순
              </div>
            </div>
          )}
        </div>
      </div>
      {!check ? (
        <div className="w-[375px] h-[504px] px-5 flex-col justify-start items-start inline-flex">
          <div
            onClick={() => {
              setDetailModal(true);
            }}
            className="w-[343px] cursor-pointer px-[15px] py-5  justify-start items-center gap-3 inline-flex"
          >
            <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
              <img
                className="w-[50px] h-[47px] left-[-2.89px] top-[-1.60px] absolute rounded-[100px]"
                src="https://via.placeholder.com/50x47"
                alt="img"
              />
            </div>
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                <div className="text-[#666666] text-sm font-semibold font-['Pretendard'] leading-[14px] tracking-tight">
                  OO동 출발{" "}
                </div>
                <div className="text-[#888888] text-xs font-normal font-['Pretendard'] leading-[14px] tracking-tight">
                  |
                </div>
                <div className="text-[#666666] text-sm font-semibold font-['Pretendard'] leading-[14px] tracking-tight">
                  1,500원
                </div>
              </div>
              <div className="text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]">
                오전 7시 30분
              </div>
            </div>
            <div className="px-3 py-2 bg-[#007aff] rounded-[15px] justify-center items-center gap-2.5 flex">
              <div className="text-white text-base font-medium font-['Pretendard'] tracking-wide">
                2/4
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[375px] h-[504px] px-5 flex-col justify-center items-center inline-flex">
          <div className="h-[150.32px] flex-col justify-start items-center gap-[45px] inline-flex">
            <div className="text-center text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-[30px]">
              현재 모집 중인 카풀이 없습니다
            </div>
            <div className="opacity-40 w-[125.55px] h-[75.32px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133"
                height="83"
                viewBox="0 0 133 83"
                fill="none"
              >
                <g id="Group" opacity="0.4">
                  <path
                    id="Vector"
                    d="M22.5559 66.2773H10.0004C6.23375 66.2773 3.72266 63.7662 3.72266 59.9996V41.1664C3.72266 35.5164 8.11707 30.4943 13.1393 29.2387C24.4392 26.0998 41.3891 22.3332 41.3891 22.3332C41.3891 22.3332 49.5501 13.5444 55.2001 7.89441C58.3389 5.38332 62.1056 3.5 66.5 3.5H110.444C114.211 3.5 117.35 6.01109 119.233 9.14996L128.022 27.3554C128.853 29.78 129.277 32.3255 129.277 34.8887V59.9996C129.277 63.7662 126.766 66.2773 123 66.2773H110.444"
                    stroke="#D1D5D9"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M97.8912 78.8248C90.957 78.8248 85.3357 73.2035 85.3357 66.2693C85.3357 59.3351 90.957 53.7139 97.8912 53.7139C104.825 53.7139 110.447 59.3351 110.447 66.2693C110.447 73.2035 104.825 78.8248 97.8912 78.8248Z"
                    stroke="#D1D5D9"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M85.3343 66.2773H47.6679"
                    stroke="#D1D5D9"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M35.1102 78.8248C28.176 78.8248 22.5548 73.2035 22.5548 66.2693C22.5548 59.3351 28.176 53.7139 35.1102 53.7139C42.0444 53.7139 47.6657 59.3351 47.6657 66.2693C47.6657 73.2035 42.0444 78.8248 35.1102 78.8248Z"
                    stroke="#D1D5D9"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
      {detailModal && (
        <div
          onClick={() => {
            setDetailModal(false);
          }}
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-end z-50"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[375px] h-[431px] px-5 pt-4 pb-[34px] bg-white rounded-tl-2xl rounded-tr-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] flex-col justify-center items-center gap-[15px] inline-flex"
          >
            <div className="w-[335px] justify-start items-center inline-flex">
              <div className="grow shrink basis-0 h-5 justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0" />
              </div>
              <div className="w-6 h-6 relative" />
            </div>
            <div className="self-stretch h-[342px] flex-col justify-start items-center gap-[25px] flex">
              <div className="self-stretch h-[266px] flex-col justify-center items-center gap-[25px] flex">
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-11 justify-start items-center gap-3 flex">
                    <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
                      <img
                        className="w-[50px] h-[47px] left-[-3px] top-[-3px] absolute rounded-[100px]"
                        src="https://via.placeholder.com/50x47"
                        alt="img"
                      />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="w-[102px] text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                        드라이버
                      </div>
                      <div className="w-[102px] h-5 text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]">
                        {"{이름}"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[197px] flex-col justify-start items-start gap-[25px] flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[120px] self-stretch px-[15px] py-3 bg-white rounded-[10px] border border-[#e9e9e9] flex-col justify-start items-start gap-3 inline-flex">
                      <div className="text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                        출발지
                      </div>
                      <div className="w-[100px] text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                        {"{주소}"}
                      </div>
                    </div>
                    <div className="pl-0.5 justify-start items-center gap-3 flex">
                      <div className=" justify-start items-center gap-1 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                        >
                          <g opacity="0.2">
                            <path
                              d="M1.60071 1L5.73224 4.30522C6.17747 4.66141 6.17747 5.33859 5.73224 5.69478L1.60071 9"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M10.6007 1L14.7322 4.30522C15.1775 4.66141 15.1775 5.33859 14.7322 5.69478L10.6007 9"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="w-[21.80px] h-[13.08px] relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="16"
                          viewBox="0 0 25 16"
                          fill="none"
                        >
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M20.1295 12.36H22.3094C22.9634 12.36 23.3993 11.924 23.3993 11.2701V8.00028C23.3993 7.01934 22.6364 6.1474 21.7644 5.92941C19.8026 5.38445 16.8597 4.73049 16.8597 4.73049C16.8597 4.73049 15.4428 3.20458 14.4619 2.22365C13.9169 1.78767 13.263 1.46069 12.5 1.46069H4.8705C4.21654 1.46069 3.67158 1.89667 3.3446 2.44163L1.81869 5.60243C1.67437 6.02339 1.60071 6.46534 1.60071 6.91035V11.2701C1.60071 11.924 2.03668 12.36 2.69064 12.36H4.8705"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M7.05401 14.5392C8.25791 14.5392 9.23387 13.5632 9.23387 12.3593C9.23387 11.1554 8.25791 10.1794 7.05401 10.1794C5.8501 10.1794 4.87415 11.1554 4.87415 12.3593C4.87415 13.5632 5.8501 14.5392 7.05401 14.5392Z"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M9.22961 12.3591H15.7692"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_4"
                              d="M17.9485 14.5392C19.1524 14.5392 20.1284 13.5632 20.1284 12.3593C20.1284 11.1554 19.1524 10.1794 17.9485 10.1794C16.7446 10.1794 15.7687 11.1554 15.7687 12.3593C15.7687 13.5632 16.7446 14.5392 17.9485 14.5392Z"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className=" justify-start items-center gap-1 flex">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                        >
                          <g opacity="0.2">
                            <path
                              d="M1.60071 1L5.73224 4.30522C6.17747 4.66141 6.17747 5.33859 5.73224 5.69478L1.60071 9"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M10.6007 1L14.7322 4.30522C15.1775 4.66141 15.1775 5.33859 14.7322 5.69478L10.6007 9"
                              stroke="#007AFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="w-[120px] self-stretch px-[15px] py-3 bg-white rounded-[10px] border border-[#e9e9e9] flex-col justify-start items-start gap-3 inline-flex">
                      <div className="text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                        도착지
                      </div>
                      <div className="w-[100px] text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                        OO대학교
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[108px] flex-col justify-start items-start gap-5 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                          출발 시간
                        </div>
                        <div className="self-stretch h-5 text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                          오전 8시 30분
                        </div>
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                          탑승 장소
                        </div>
                        <div className="self-stretch h-5 text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                          {"{주소}"}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                          탑승 인원
                        </div>
                        <div className="self-stretch h-5 text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                          2/4
                        </div>
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                          비용
                        </div>
                        <div className="self-stretch h-5 text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                          1,500원
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  router.push("/detailCarple");
                }}
                className="cursor-pointer w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-white text-lg font-semibold font-['Pretendard']">
                  예약하기
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {driverModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
          <div className="w-[335px] h-[397.32px] px-5 pt-10 pb-[25px] bg-white rounded-[20px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.06)] border-2 border-[#eaeaea]/50 flex-col justify-start items-center gap-[30px] inline-flex overflow-hidden">
            <div className="flex-col max-h-[243px] justify-start items-center gap-[35px] flex">
              <div className="text-center">
                <span className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-[31px]">
                  드라이버 활동을 위해서는
                  <br />
                </span>
                <span className="text-[#007aff] text-xl font-semibold font-['Pretendard'] leading-[31px]">
                  차량 등록
                </span>
                <span className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-[31px]">
                  이 필요합니다
                </span>
              </div>
              <div className=" w-[125.55px] h-[75.32px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="133"
                  height="75"
                  viewBox="0 0 133 83"
                  fill="none"
                >
                  <g id="Group" opacity="0.3">
                    <path
                      id="Vector"
                      d="M22.5559 66.8945H10.0004C6.23375 66.8945 3.72266 64.3834 3.72266 60.6168V41.7836C3.72266 36.1336 8.11707 31.1114 13.1393 29.8559C24.4392 26.717 41.3891 22.9504 41.3891 22.9504C41.3891 22.9504 49.5501 14.1616 55.2001 8.5116C58.3389 6.00051 62.1056 4.11719 66.5 4.11719H110.444C114.211 4.11719 117.35 6.62828 119.233 9.76715L128.022 27.9726C128.853 30.3972 129.277 32.9427 129.277 35.5059V60.6168C129.277 64.3834 126.766 66.8945 123 66.8945H110.444"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M97.8912 79.442C90.957 79.442 85.3357 73.8207 85.3357 66.8865C85.3357 59.9523 90.957 54.3311 97.8912 54.3311C104.825 54.3311 110.447 59.9523 110.447 66.8865C110.447 73.8207 104.825 79.442 97.8912 79.442Z"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M85.3343 66.8945H47.6679"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M35.1102 79.442C28.176 79.442 22.5548 73.8207 22.5548 66.8865C22.5548 59.9523 28.176 54.3311 35.1102 54.3311C42.0444 54.3311 47.6657 59.9523 47.6657 66.8865C47.6657 73.8207 42.0444 79.442 35.1102 79.442Z"
                      stroke="#007AFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex-col justify-center items-center  flex">
                <div>
                  <span className="text-[#007aff] text-base font-medium font-['Pretendard'] leading-snug">
                    차량 등록
                  </span>
                  <span className="text-[#4f4f4f] text-base font-medium font-['Pretendard'] leading-snug">
                    을 하시겠어요?
                  </span>
                </div>
                <div className="text-[#4f4f4f] text-base font-medium font-['Pretendard'] leading-snug">
                  등록 후에도 패신저 활동이 가능해요
                </div>
              </div>
            </div>

            <div className="justify-center items-start gap-2.5 inline-flex">
              <div
                onClick={() => setDriverModal(false)}
                className="cursor-pointer h-[57px] px-[30px] py-[18px] bg-[#dadde1] rounded-[10px] justify-center items-center gap-2.5 flex"
              >
                <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
                  나중에
                </div>
              </div>
              <div
                onClick={() => {
                  router.push("/registerCar");
                }}
                className="cursor-pointer h-[57px] px-10 py-[18px] bg-[#007aff] rounded-[10px] justify-center items-center gap-2.5 flex"
              >
                <div className="text-white text-lg font-semibold font-['Pretendard']">
                  차량 등록
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
