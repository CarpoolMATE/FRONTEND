'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DetailCarplePage: React.FC = () => {
  const router = useRouter();

  const [cancelModal, setCancelModal] = useState(false);
  const [driverCancelModal, setDriverCancelModal] = useState(false);

  return (
    <div className="relative w-full px-[20px] pt-[57.5px]">
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
          카풀 예약 확인
        </div>
      </div>
      <div className="mt-[65px] w-[335px]  flex-col justify-start items-start gap-[50px] inline-flex">
        <div className="self-stretch h-[476px] flex-col justify-start items-start gap-10 flex">
          <div className="justify-start items-start gap-[15px] inline-flex">
            <div className="w-[24.34px] h-[134px] relative">
              <div className="w-[109.72px] h-[0px] left-[15px] top-[12.14px] absolute origin-top-left rotate-90 opacity-20 border-2 border-[#007aff]"></div>
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
                  <div className="text-[#666666] text-[15px] font-medium font-['Pretendard']">
                    맞은 편 편의점 앞
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
          <div className="self-stretch justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="h-[62px] flex-col justify-start items-start gap-1 flex">
                <div className="w-[102px] text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                  드라이버
                </div>
                <div className="self-stretch h-11 flex-col justify-center items-center gap-5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                      <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
                        <img
                          className="w-[50px] h-[47px] left-[-3px] top-[-3px] absolute rounded-[100px]"
                          src="https://via.placeholder.com/50x47"
                          alt="img"
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
              <div className="h-[62px] flex-col justify-start items-start gap-1 flex">
                <div className="w-[102px] text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                  차량 정보
                </div>
                <div className="self-stretch h-11 flex-col justify-center items-center gap-5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                      <div className="w-11 h-11 relative  overflow-hidden">
                        <div className="w-11 h-11 left-0 top-0 absolute bg-[#007aff] rounded-[55px]">
                          <img
                            className="w-11 h-11 left-[44px] top-0 absolute origin-top-left rotate-180 rounded-[55px]"
                            src="https://via.placeholder.com/44x44"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="text-[#3c3c3c] text-[15px] font-medium font-['Pretendard'] leading-[14px]">
                          12가3456
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[102px] text-[#b2b2b2] text-sm font-medium font-['Pretendard'] leading-[14px] tracking-tight">
                패신저 (4/4)
              </div>
              <div className="self-stretch h-[200px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-11 flex-col justify-center items-center gap-5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                      <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
                        <img
                          className="w-[50px] h-[47px] left-[-3px] top-[-3px] absolute rounded-[100px]"
                          src="https://via.placeholder.com/50x47"
                          alt="img"
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
                <div className="self-stretch h-11 flex-col justify-center items-center gap-5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                      <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
                        <img
                          className="w-[50px] h-[47px] left-[-3px] top-[-3px] absolute rounded-[100px]"
                          src="https://via.placeholder.com/50x47"
                          alt="img"
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
                <div className="self-stretch h-11 flex-col justify-center items-center gap-5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                      <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
                        <img
                          className="w-[50px] h-[47px] left-[-3px] top-[-3px] absolute rounded-[100px]"
                          src="https://via.placeholder.com/50x47"
                          alt="img"
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
                <div className="self-stretch h-11 flex-col justify-center items-center gap-5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                      <div className="w-11 h-11 relative bg-[#f2f8ff] rounded-[100px]  overflow-hidden">
                        <img
                          className="w-[50px] h-[47px] left-[-3px] top-[-3px] absolute rounded-[100px]"
                          src="https://via.placeholder.com/50x47"
                          alt="img"
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
            </div>
          </div>
        </div>
        <div className="self-stretch h-[110px] flex-col justify-start items-center gap-2 flex">
          <div className="cursor-pointer w-[335px] h-[51px] px-[30px] py-[15px] rounded-xl border border-[#007aff] justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#007aff] text-lg font-semibold font-['Pretendard']">
              오픈카톡 참여하기
            </div>
          </div>
          <div
            onClick={() => setDriverCancelModal(true)}
            className="cursor-pointer w-[335px] h-[51px] px-[30px] py-[15px] bg-[#e0302d] rounded-xl justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-lg font-semibold font-['Pretendard']">
              예약 취소하기
            </div>
          </div>
        </div>
      </div>
      {cancelModal && (
        <div
          onClick={() => {
            setCancelModal(false);
          }}
          className="fixed w-full h-full top-0 left-0 flex-col flex justify-center items-center bg-[#000000] bg-opacity-50 z-50"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[310px] h-[150px] bg-white rounded-[14px] backdrop-blur-[54.37px] flex-col justify-start items-start inline-flex "
          >
            <div className="self-stretch h-[106px] py-[19px] flex-col justify-start items-center gap-0.5 flex ">
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-start inline-flex">
                  <div className="w-60 text-center text-[#151515] text-base font-bold font-['Noto Sans KR'] leading-snug">
                    예약을 취소하시겠어요?
                  </div>
                </div>
                <div className="justify-start items-start inline-flex">
                  <div className="w-60 text-center text-[#3c3c3c] text-xs font-normal font-['Noto Sans KR'] leading-none tracking-tight">
                    반복적이고 고의적인 카풀 예약 취소는 추후 서비스 이용에
                    제한됩니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="h-11 relative w-full">
              <div className="cursor-pointer w-[155px] h-11 left-[155px] top-0 absolute z-[10]">
                <div className="left-[30px] top-[10px] absolute text-center text-[#e0302d] text-base font-normal font-['Noto Sans KR'] leading-normal">
                  네, 취소할래요
                </div>
              </div>
              <div
                onClick={() => setCancelModal(false)}
                className="cursor-pointer w-[155px] h-11 left-0 top-0 absolute z-[10]"
              >
                <div className="left-[55px] top-[11px] absolute text-center text-[#007aff] text-base font-normal font-['Noto Sans KR'] leading-normal">
                  아니오
                </div>
              </div>
              <div className="w-[310px] h-11 left-0 top-0 absolute">
                <div className="w-[0.50px] h-[43.50px] left-[154.50px] top-[0.50px] absolute bg-[#a2abb4]" />
                <div className="w-[310px] h-[0.50px] left-0 top-0 absolute bg-[#a2abb4]" />
              </div>
            </div>
          </div>
        </div>
      )}
      {driverCancelModal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#000000] bg-opacity-50 z-50">
          <div className="w-[310px] h-[191px] bg-white rounded-[14px] backdrop-blur-[54.37px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch min-h-[150px] px-[31px] flex-1 py-[19px] flex-col justify-start items-center gap-0.5 flex overflow-hidden">
              <div className="flex-col h-full justify-start items-start gap-3 flex">
                <div className="justify-start items-start inline-flex">
                  <div className="w-60 text-center text-[#151515] text-base font-bold font-['Noto Sans KR'] leading-snug">
                    카풀 예약을 취소하시겠어요?
                  </div>
                </div>
                <div className="justify-start items-start inline-flex">
                  <div className="text-center text-[#3c3c3c] text-xs font-normal font-['Noto Sans KR'] leading-none tracking-tight">
                    패신저에게 고지하셨나요?
                    <br />
                    이미 입금을 받으셨다면 환불처리를 진행해주세요.
                    <br />
                    <br />
                    패신저가 존재하는 상태에서 2회 이상 취소시, 추후 서비스를 더
                    이상 이용하실 수 없습니다.
                    <br />
                    <br />
                    그래도 취소하시겠습니까?{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-11 w-full relative">
              <div className="cursor-pointer w-[155px] h-11 left-[155px] top-0 absolute z-10">
                <div className="left-[30px] top-[10px] absolute text-center text-[#e0302d] text-base font-normal font-['Noto Sans KR'] leading-normal">
                  네, 취소할래요
                </div>
              </div>
              <div
                onClick={() => setDriverCancelModal(false)}
                className="cursor-pointer z-10 w-[155px] h-11 left-0 top-0 absolute"
              >
                <div className="left-[55px] top-[11px] absolute text-center text-[#007aff] text-base font-normal font-['Noto Sans KR'] leading-normal">
                  아니오
                </div>
              </div>
              <div className="w-[310px] h-11 left-0 top-0 absolute">
                <div className="w-[0.50px] h-[43.50px] left-[154.50px] top-[0.50px] absolute bg-[#a2abb4]" />
                <div className="w-[310px] h-[0.50px] left-0 top-0 absolute bg-[#a2abb4]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCarplePage;
