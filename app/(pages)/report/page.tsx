"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ReportPage: React.FC = () => {
  const router = useRouter();
  const [content, setContent] = useState("");

  return (
    <div className="relative w-full px-[20px] pt-[157.5px]">
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
          신고하기
        </div>
      </div>
      <textarea
        maxLength={200}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="불편했던 점들을 자세히 작성해주세요."
        className="w-[335px] h-[302px] resize-none bg-white rounded-[10px] border border-[#e9e9e9] p-[15px]"
      ></textarea>
      <div className="text-right text-[#b2b2b2] text-sm font-normal font-['Pretendard'] leading-[14px] tracking-tight">
        {content.length}/200
      </div>
      <div
        onClick={content ? () => router.push("/report/done") : () => {}}
        className={`w-[335px] h-[51px] px-[30px] py-[15px]  ${
          content
            ? "bg-[#007aff] text-white cursor-pointer"
            : "bg-[#dadde1] text-[#a2abb4]"
        } rounded-xl justify-center items-center gap-2.5 inline-flex mt-[240px]`}
      >
        <div className=" text-lg font-semibold font-['Pretendard']">
          신고하기
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
