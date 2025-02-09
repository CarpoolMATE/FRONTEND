'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const HomePage: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState('빠른 시간순');
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

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
        <div
          onClick={() => router.push('/profile')}
          className="cursor-pointer w-[38px] h-[38px] relative bg-[#f2f8ff] rounded-[105.56px]  overflow-hidden"
        >
          <Image
            width={44.33}
            height={44.33}
            src="https://via.placeholder.com/44x44"
            alt="img"
            className="left-[-3.17px] top-[-3.17px] absolute rounded-[105.56px]"
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
                  setSort('빠른 시간순');
                }}
                className={`${
                  sort === '빠른 시간순' ? 'text-[#3c3c3c]' : 'text-[#b2b2b2]'
                } cursor-pointer  text-sm font-medium font-['Pretendard']`}
              >
                빠른 시간순
              </div>
              <div
                onClick={() => {
                  setModal(false);
                  setSort('낮은 요금순');
                }}
                className={`${
                  sort === '낮은 요금순' ? 'text-[#3c3c3c]' : 'text-[#b2b2b2]'
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
              <Image
                width={50}
                height={47}
                src="https://via.placeholder.com/50x47"
                alt="img"
                className="left-[-2.89px] top-[-1.60px] absolute rounded-[100px]"
              />
            </div>
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                <div className="text-[#666666] text-sm font-semibold font-['Pretendard'] leading-[14px] tracking-tight">
                  OO동 출발{' '}
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
            className="w-[375px] relative h-[431px] px-5 pb-[34px] bg-white rounded-tl-2xl rounded-tr-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] flex-col justify-center items-center gap-[15px] inline-flex"
          >
            <div className="w-[335px] h-[431px]">
              <svg
                onClick={() => setDetailModal(false)}
                className="cursor-pointer mt-[10px] absolute z-[101] right-[25px] top-[15px]"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  d="M14 2.12875L12.59 0.71875L7 6.30875L1.41 0.71875L0 2.12875L5.59 7.71875L0 13.3088L1.41 14.7188L7 9.12875L12.59 14.7188L14 13.3088L8.41 7.71875L14 2.12875Z"
                  fill="#575757"
                />
              </svg>
              <div className="w-[335px] h-[431px] pt-[55px] flex-col justify-start items-start gap-[20px] inline-flex">
                <div className="self-stretch  flex-col justify-start items-start gap-[25px] flex">
                  <div className="h-[62px] flex-col justify-start items-start gap-1 flex">
                    <div className="w-[102px] text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                      드라이버
                    </div>
                    <div className="self-stretch h-11 flex-col justify-center items-center gap-5 flex">
                      <div className="self-stretch justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                          <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
                            <Image
                              width={50}
                              height={47}
                              src="https://via.placeholder.com/50x47"
                              alt="img"
                              className="left-[-3px] top-[-3px] absolute rounded-[100px]"
                            />
                          </div>
                          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                              {'{이름}'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-start gap-[15px] inline-flex">
                    <div className="w-[24.34px] h-[134px] relative">
                      <div className="w-[109.72px] h-[0px] left-[14px] top-[12.14px] absolute origin-top-left rotate-90 opacity-20 border-2 border-[#007aff]"></div>
                      <div className="w-[24.34px] h-[24.28px] left-0 top-0 absolute">
                        <div className="w-[24.34px] h-[24.28px] left-0 top-0 absolute opacity-10 bg-[#007aff] rounded-full" />
                        <div className="w-[6.87px] h-[6.85px] left-[8.74px] top-[8.71px] absolute bg-[#007aff] rounded-full" />
                      </div>
                      <div className="w-[24.34px] h-[24.28px] left-[-0px] top-[109.72px] absolute">
                        <div className="w-[24.34px] h-[24.28px] left-0 top-0 absolute opacity-10 bg-[#007aff] rounded-full" />
                        <div className="w-[6.87px] h-[6.85px] left-[8.74px] top-[8.71px] absolute bg-[#007aff] rounded-full" />
                      </div>
                    </div>
                    <div className="self-stretch flex-col justify-between items-start inline-flex">
                      <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 flex">
                        <div className="flex-col justify-start items-start gap-1.5 flex">
                          <div className="text-[#3c3c3c] text-base font-medium font-['Pretendard']">
                            홍대입구역 8번 출구
                          </div>
                        </div>
                        <div className="h-4 justify-start items-center gap-1.5 inline-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                          >
                            <path
                              id="Vector"
                              d="M8.40625 0.9375C12.8592 0.9375 16.4687 4.54708 16.4687 9C16.4687 13.4529 12.8592 17.0625 8.40625 17.0625C3.95333 17.0625 0.34375 13.4529 0.34375 9C0.34375 4.54708 3.95333 0.9375 8.40625 0.9375ZM8.40625 2.55C6.6956 2.55 5.05502 3.22955 3.84541 4.43916C2.6358 5.64877 1.95625 7.28935 1.95625 9C1.95625 10.7106 2.6358 12.3512 3.84541 13.5608C5.05502 14.7704 6.6956 15.45 8.40625 15.45C10.1169 15.45 11.7575 14.7704 12.9671 13.5608C14.1767 12.3512 14.8562 10.7106 14.8562 9C14.8562 7.28935 14.1767 5.64877 12.9671 4.43916C11.7575 3.22955 10.1169 2.55 8.40625 2.55ZM8.40625 4.1625C8.60373 4.16253 8.79433 4.23503 8.9419 4.36625C9.08947 4.49748 9.18375 4.6783 9.20686 4.87442L9.2125 4.96875V8.66621L11.395 10.8487C11.5396 10.9938 11.6236 11.1885 11.6298 11.3933C11.6361 11.598 11.5642 11.7975 11.4287 11.9511C11.2932 12.1047 11.1043 12.2011 10.9004 12.2205C10.6965 12.2399 10.4928 12.181 10.3308 12.0557L10.255 11.9888L7.83623 9.57002C7.71092 9.4446 7.63045 9.28138 7.60726 9.10562L7.6 9V4.96875C7.6 4.75492 7.68494 4.54985 7.83615 4.39865C7.98735 4.24744 8.19242 4.1625 8.40625 4.1625Z"
                              fill="#B2B2B2"
                            />
                          </svg>
                          <div className="text-[#666666] text-sm font-medium font-['Pretendard'] leading-[14px]">
                            오전 8시 30분
                          </div>
                        </div>
                      </div>
                      <div className="w-[66px] pb-0.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-[#3c3c3c] text-base font-medium font-['Pretendard']">
                          OO대학교
                        </div>
                      </div>
                    </div>
                    <svg
                      className="cursor-pointer absolute right-[25px] top-[125px]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                    >
                      <rect
                        y="0.71875"
                        width="25"
                        height="25"
                        rx="5"
                        fill="url(#pattern0_3713_6277)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_3713_6277"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_3713_6277"
                            transform="scale(0.00333333)"
                          />
                        </pattern>
                        <image
                          id="image0_3713_6277"
                          width="300"
                          height="300"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>

                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="self-stretch text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                        탑승 인원
                      </div>
                      <div className="self-stretch h-5 text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                        4/4
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
                <div
                  onClick={() => {
                    router.push('/detailCarple');
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
                  router.push('/registerCar');
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
