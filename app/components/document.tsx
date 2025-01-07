/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const Dots = () => {
  const [drop, setDrop] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        onClick={() => setDrop(true)}
        className="cursor-pointer w-[3px] h-full relative flex-col justify-start items-start gap-[3px] inline-flex"
      >
        <div className="w-[3px] h-[3px] bg-[#666666] rounded-full" />
        <div className="w-[3px] h-[3px] bg-[#666666] rounded-full" />
        <div className="w-[3px] h-[3px] bg-[#666666] rounded-full" />
      </div>
      {drop && (
        <div
          onClick={() => router.push("/report")}
          className="w-[85px] absolute top-[32px] right-[-10px] cursor-pointer h-[41px] px-[10px] py-3 bg-white rounded-xl shadow-[3px_3px_8px_0px_rgba(0,0,0,0.10)] border border-[#e9e9e9] flex-col justify-center items-center gap-[15px] inline-flex"
        >
          <div className="text-[#3c3c3c] text-sm font-medium font-['Pretendard']">
            신고하기
          </div>
        </div>
      )}
    </div>
  );
};
const Document: React.FC = () => {
  const dates = ["11/21", "11/22", "11/23", "11/24"];

  return (
    <div>
      <div className="w-[375px] h-[424px] px-4 py-[25px] bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[519px] flex-col justify-start items-start flex">
          {dates.map((el) => {
            return (
              <div className="w-full " key={el}>
                <div className="w-full h-[99px] px-[15px] pt-[15px] pb-5 border-b border-[#e9e9e9] flex-col justify-center items-start gap-3 flex">
                  <div className="w-full text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]">
                    {el}
                  </div>
                  <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="text-[#666666] text-sm font-semibold font-['Pretendard'] leading-[14px] tracking-tight">
                          OO동 출발
                        </div>
                        <div className="text-[#888888] text-xs font-normal font-['Pretendard'] leading-[14px] tracking-tight">
                          |
                        </div>
                        <div className="text-[#666666] text-sm font-semibold font-['Pretendard'] leading-[14px] tracking-tight">
                          1,500원
                        </div>
                      </div>
                      <div className="text-[#3c3c3c] text-base font-medium font-['Pretendard'] leading-[14px]">
                        오전 8시 30분
                      </div>
                    </div>
                    <div className="justify-start items-center gap-5 flex">
                      <div className="px-3 py-2 bg-[#a2abb4] rounded-[15px] justify-center items-center gap-2.5 flex">
                        <div className="text-white text-base font-medium font-['Pretendard'] tracking-wide">
                          2/4
                        </div>
                      </div>
                      <div className="relative">
                        <Dots />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Document;
