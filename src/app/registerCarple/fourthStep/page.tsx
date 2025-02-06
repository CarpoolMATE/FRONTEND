'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const RegisterCarple: React.FC = () => {
  const router = useRouter();
  const [cancleModal, setCancelModal] = React.useState(false);

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
        <div className="absolute left-[141.5px] top-[52.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard']">
          카풀 생성하기
        </div>
        <div className="absolute left-[20px] top-[139.5px] w-[104px]   h-[5px] bg-[#007aff]  rounded-[15px]" />
        <div className="absolute left-[134.5px] top-[139.5px] w-[104px]   h-[5px] bg-[#007aff] rounded-[15px]" />
        <div className="absolute left-[254.5px] top-[139.5px] w-[104px]   h-[5px] bg-[#007aff] rounded-[15px]" />
      </div>

      <div className="mt-[134px] text-[#3c3c3c] text-2xl font-bold font-['Pretendard'] leading-9 mb-[40px]">
        카풀 미리보기
      </div>

      <div className="w-[335px] h-80 flex-col justify-start items-start gap-10 inline-flex">
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-[157.50px] flex-col justify-start items-start gap-1 inline-flex">
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
          <div className="w-[157.50px] flex-col justify-start items-start gap-1 inline-flex">
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
        <div className="justify-start items-start gap-[15px] inline-flex">
          <div className="w-[24.34px] h-[134px] relative">
            <div className="w-[109.72px] h-[0px] left-[13.07px] top-[12.14px] absolute origin-top-left rotate-90 opacity-20 border-2 border-[#007aff]"></div>
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
            <div className="self-stretch h-[47px] flex-col justify-start items-start gap-3 flex">
              <div className="text-[#3c3c3c] text-base font-medium font-['Pretendard']">
                홍대입구역 8번 출구
              </div>
              <div className="h-4 justify-start items-center gap-1.5 inline-flex">
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
      </div>

      <div className="mt-[130px] w-[335px] h-[51px] justify-start items-start gap-2.5 inline-flex">
        <div
          onClick={() => setCancelModal(true)}
          className="cursor-pointer grow shrink basis-0 h-[51px] px-[30px] py-[15px] rounded-xl border border-[#007aff] justify-center items-center gap-2.5 flex"
        >
          <div className="text-[#007aff] text-lg font-semibold font-['Pretendard']">
            취소
          </div>
        </div>
        <div className="cursor-pointer grow shrink basis-0 h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 flex">
          <div className="text-white text-lg font-semibold font-['Pretendard']">
            카풀 생성하기
          </div>
        </div>
      </div>
      {cancleModal && (
        <div>
          {cancleModal && (
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
                className="w-[310px] h-[130px] bg-white rounded-[14px] backdrop-blur-[54.37px] flex-col justify-start items-start inline-flex "
              >
                <div className="self-stretch h-[106px] py-[19px] flex-col justify-start items-center gap-0.5 flex ">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="w-60 text-center text-[#151515] text-base font-bold font-['Noto Sans KR'] leading-snug">
                        카풀 생성을 취소하시겠어요?
                      </div>
                    </div>
                    <div className="justify-start items-start inline-flex">
                      <div className="h-[17px] justify-start items-start inline-flex">
                        <div className="w-60 text-center text-[#3c3c3c] text-xs font-normal font-['Noto Sans KR'] leading-none tracking-tight">
                          작성중이던 내용은 저장되지 않습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-11 relative w-full">
                  <div className="cursor-pointer w-[155px] h-11 left-[155px] top-[-5px] absolute z-[10]">
                    <div className="left-[30px] top-[10px] absolute text-center text-[#e0302d] text-base font-normal font-['Noto Sans KR'] leading-normal">
                      네, 취소할래요
                    </div>
                  </div>
                  <div
                    onClick={() => setCancelModal(false)}
                    className="cursor-pointer w-[155px] h-11 left-0 top-[-5px] absolute z-[10]"
                  >
                    <div className="left-[55px] top-[11px] absolute text-center text-[#007aff] text-base font-normal font-['Noto Sans KR'] leading-normal">
                      아니오
                    </div>
                  </div>
                  <div className="w-[310px] h-11 left-0 top-0 absolute">
                    <div className="w-[0.50px] h-[38px] left-[154.50px] top-[-0px] absolute bg-[#a2abb4]" />
                    <div className="w-[310px] h-[0.50px] left-0 top-0 absolute bg-[#a2abb4]" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterCarple;
