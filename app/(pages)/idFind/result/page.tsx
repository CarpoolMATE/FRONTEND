"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const ResultPageData: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <div className="relative w-full h-full flex   items-center flex-col">
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
        아이디 찾기
      </div>
      <div className="text-center pt-[106px] mb-[136px]">
        <span className="text-[#3c3c3c] text-2xl font-semibold font-['Pretendard'] leading-[38.40px]">
          김OO님의 아이디는
          <br />
        </span>
        <span className="text-[#007aff] text-2xl font-medium font-['Pretendard'] leading-[38.40px]">
          {params.get("email")}
        </span>
        <span className="text-[#3c3c3c] text-2xl font-semibold font-['Pretendard'] leading-[38.40px]">
          입니다
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="133"
        height="133"
        viewBox="0 0 133 133"
        fill="none"
      >
        <g id="Group" opacity="0.3">
          <path
            id="Vector"
            d="M66.5 127.109C74.5121 127.119 82.4471 125.546 89.8493 122.48C97.2514 119.414 103.975 114.915 109.633 109.242C115.306 103.584 119.804 96.8608 122.87 89.4587C125.936 82.0565 127.51 74.1214 127.5 66.1094C127.51 58.0973 125.936 50.1622 122.87 42.7601C119.804 35.3579 115.306 28.6346 109.633 22.9763C103.975 17.3038 97.2514 12.8052 89.8493 9.73906C82.4471 6.67288 74.5121 5.09954 66.5 5.10942C58.4879 5.09954 50.5529 6.67288 43.1507 9.73906C35.7486 12.8052 29.0252 17.3038 23.3669 22.9763C17.6944 28.6346 13.1959 35.3579 10.1297 42.7601C7.06351 50.1622 5.49017 58.0973 5.50005 66.1094C5.49017 74.1214 7.06351 82.0565 10.1297 89.4587C13.1959 96.8608 17.6944 103.584 23.3669 109.242C29.0252 114.915 35.7486 119.414 43.1507 122.48C50.5529 125.546 58.4879 127.119 66.5 127.109Z"
            stroke="#007AFF"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M42.1016 66.1125L60.4015 84.4125L97.0015 47.8125"
            stroke="#007AFF"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default function ResultPage() {
  return (
    <Suspense>
      <ResultPageData />
    </Suspense>
  );
}
