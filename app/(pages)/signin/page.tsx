"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <div className="text-center text-[#007aff] text-[80px] font-normal font-['Hancom Sans SemiBold'] leading-[120px] pt-[180px]">
        mate
      </div>
      <div className="text-center text-[#aaaaaa] text-xl font-semibold font-['Apple SD Gothic Neo'] leading-[30px] mb-[111px]">
        우리들의 출퇴근 메이트
      </div>

      <div className="w-[335px] h-[244px] flex-col justify-start items-center gap-[30px] inline-flex">
        <div className="self-stretch h-[187px] flex-col justify-start items-start gap-2 flex">
          <div
            className="self-stretch px-5 py-[15px] bg-[#fee500] rounded-[10px] justify-center items-center inline-flex overflow-hidden cursor-pointer"
            onClick={() => {
              router.push("/home");
            }}
          >
            <div className="w-[20.60px] h-[20.60px] relative  overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clipPath="url(#clip0_113_65)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3 0.99585C4.61117 0.99585 0 4.55846 0 8.95235C0 11.685 1.78351 14.094 4.49941 15.5268L3.35669 19.7012C3.25573 20.0701 3.67757 20.3641 4.00151 20.1503L9.01061 16.8443C9.43332 16.8851 9.86291 16.909 10.3 16.909C15.9884 16.909 20.5999 13.3465 20.5999 8.95235C20.5999 4.55846 15.9884 0.99585 10.3 0.99585"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_113_65">
                    <rect
                      width="20.5999"
                      height="20.6"
                      fill="white"
                      transform="translate(0 0.309326)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="grow shrink basis-0 text-center text-black/90 text-lg font-semibold font-pretendard leading-[27px]">
              카카오로 계속하기
            </div>
          </div>
          <div
            onClick={() => {
              router.push("/home");
            }}
            className="cursor-pointer self-stretch px-5 py-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-center items-center inline-flex overflow-hidden"
          >
            <div className="w-[20.60px] h-[20.60px] relative  overflow-hidden">
              <Image
                src="/images/google.png"
                alt="google"
                width="20"
                height="20"
              />
            </div>
            <div className="grow shrink basis-0 text-center text-black/90 text-lg font-semibold font-pretendard leading-[27px]">
              구글로 계속하기
            </div>
          </div>
          <div
            onClick={() => {
              router.push("/login");
            }}
            className="cursor-pointer self-stretch px-5 py-[15px] bg-[#007aff] rounded-[10px] border justify-center items-center inline-flex overflow-hidden"
          >
            <div className="w-[22px] h-[22px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 8.60938C15 9.67024 14.5786 10.6877 13.8284 11.4378C13.0783 12.1879 12.0609 12.6094 11 12.6094C9.93913 12.6094 8.92172 12.1879 8.17157 11.4378C7.42143 10.6877 7 9.67024 7 8.60938C7 7.54851 7.42143 6.53109 8.17157 5.78095C8.92172 5.0308 9.93913 4.60938 11 4.60938C12.0609 4.60938 13.0783 5.0308 13.8284 5.78095C14.5786 6.53109 15 7.54851 15 8.60938ZM13 8.60938C13 9.13981 12.7893 9.64852 12.4142 10.0236C12.0391 10.3987 11.5304 10.6094 11 10.6094C10.4696 10.6094 9.96086 10.3987 9.58579 10.0236C9.21071 9.64852 9 9.13981 9 8.60938C9 8.07894 9.21071 7.57023 9.58579 7.19516C9.96086 6.82009 10.4696 6.60938 11 6.60938C11.5304 6.60938 12.0391 6.82009 12.4142 7.19516C12.7893 7.57023 13 8.07894 13 8.60938Z"
                    fill="white"
                  />
                  <path
                    id="Vector_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 0.609375C4.925 0.609375 0 5.53438 0 11.6094C0 17.6844 4.925 22.6094 11 22.6094C17.075 22.6094 22 17.6844 22 11.6094C22 5.53438 17.075 0.609375 11 0.609375ZM2 11.6094C2 13.6994 2.713 15.6234 3.908 17.1514C4.74744 16.0495 5.83015 15.1565 7.07164 14.5421C8.31312 13.9277 9.6798 13.6085 11.065 13.6094C12.4324 13.6078 13.7821 13.9185 15.0111 14.5177C16.2402 15.117 17.3162 15.9891 18.157 17.0674C19.0234 15.931 19.6068 14.6046 19.8589 13.198C20.111 11.7913 20.0244 10.3449 19.6065 8.97836C19.1886 7.61181 18.4512 6.36442 17.4555 5.33941C16.4598 4.3144 15.2343 3.54123 13.8804 3.08388C12.5265 2.62653 11.0832 2.49815 9.66986 2.70935C8.25652 2.92055 6.91379 3.46527 5.75277 4.29843C4.59175 5.13159 3.64581 6.22925 2.99323 7.50057C2.34065 8.7719 2.00018 10.1803 2 11.6094ZM11 20.6094C8.93391 20.6127 6.93014 19.9019 5.328 18.5974C5.97281 17.674 6.83119 16.9201 7.83008 16.3998C8.82896 15.8796 9.93876 15.6084 11.065 15.6094C12.1772 15.6084 13.2735 15.8728 14.263 16.3807C15.2524 16.8885 16.1064 17.6252 16.754 18.5294C15.1395 19.8764 13.1026 20.6127 11 20.6094Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div className="grow shrink basis-0 text-center text-white text-lg font-semibold font-pretendard leading-[27px]">
              아이디로 로그인
            </div>
          </div>
        </div>
        <div
          className="justify-start items-center gap-3 inline-flex"
          onClick={() => {
            router.push("/signup");
          }}
        >
          <div className="cursor-pointer text-center text-[#aaaaaa] text-base font-medium font-pretendard leading-normal">
            회원가입
          </div>
          <div className="opacity-50 text-center text-[#aaaaaa] text-lg font-normal font-pretendard leading-[27px]">
            |
          </div>
          <div className="cursor-pointer text-center text-[#aaaaaa] text-base font-medium font-pretendard leading-normal">
            문의하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
