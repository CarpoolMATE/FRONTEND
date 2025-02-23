"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DoneReportPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="relative w-full px-[20px] pt-[257.5px]">
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
        <div className="absolute left-[101.5px] top-[102.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
          신고가 접수되었습니다.
        </div>
      </div>
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="133"
        height="132"
        viewBox="0 0 133 132"
        fill="none"
      >
        <g id="Group" opacity="0.3">
          <path
            id="Vector"
            d="M66.5 127C74.5121 127.01 82.4471 125.436 89.8493 122.37C97.2514 119.304 103.975 114.806 109.633 109.133C115.306 103.475 119.804 96.7514 122.87 89.3493C125.936 81.9471 127.51 74.0121 127.5 66C127.51 57.9879 125.936 50.0529 122.87 42.6507C119.804 35.2486 115.306 28.5252 109.633 22.8669C103.975 17.1944 97.2514 12.6959 89.8493 9.62968C82.4471 6.56351 74.5121 4.99017 66.5 5.00005C58.4879 4.99017 50.5529 6.56351 43.1507 9.62968C35.7486 12.6959 29.0252 17.1944 23.3669 22.8669C17.6944 28.5252 13.1959 35.2486 10.1297 42.6507C7.06351 50.0529 5.49017 57.9879 5.50005 66C5.49017 74.0121 7.06351 81.9471 10.1297 89.3493C13.1959 96.7514 17.6944 103.475 23.3669 109.133C29.0252 114.806 35.7486 119.304 43.1507 122.37C50.5529 125.436 58.4879 127.01 66.5 127Z"
            stroke="#007AFF"
            stroke-width="10"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M42.1016 66.0031L60.4015 84.3031L97.0015 47.7031"
            stroke="#007AFF"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <div className="text-center text-[#666666] text-base font-medium font-['Pretendard'] leading-relaxed mt-[47px]">
        메이트 팀이 3일 내로 확인 후<br />
        조치를 취할거예요
      </div>
      <div
        onClick={() => router.push("/profile")}
        className="cursor-pointer w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[210px]"
      >
        <div className="text-white text-lg font-semibold font-['Pretendard']">
          확인
        </div>
      </div>
    </div>
  );
};

export default DoneReportPage;
