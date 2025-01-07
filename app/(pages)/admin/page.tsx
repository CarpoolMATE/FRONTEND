"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AdminPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="w-[540px] h-[451px] flex-col justify-start items-center gap-[30px] inline-flex">
        <div className="w-full text-center">
          <span className="mr-[12px] text-[#007aff] text-5xl font-normal font-['Hancom Sans SemiBold']">
            mate
          </span>
          <span className="text-white text-5xl font-normal font-['Hancom Sans SemiBold']">
            admin
          </span>
        </div>
        <div className="w-full h-[357px] p-[60px] bg-white rounded-[20px] flex-col justify-start items-center gap-[35px] flex">
          <div className="self-stretch h-[138px] flex-col justify-start items-start gap-2.5 flex">
            <input
              placeholder="아이디"
              className="self-stretch px-[15px] py-5 bg-white rounded-xl border border-[#e9e9e9] justify-start items-center gap-3 inline-flex placeholder:text-[#b2b2b2] text-xl font-medium font-['Pretendard']"
            />

            <input
              placeholder="비밀번호"
              className="self-stretch px-[15px] py-5 bg-white rounded-xl border border-[#e9e9e9] justify-start items-center gap-3 inline-flex placeholder:text-[#b2b2b2] text-xl font-medium font-['Pretendard']"
            />
          </div>
          <div
            onClick={() => router.push("/admin/main")}
            className="cursor-pointer self-stretch px-[30px] py-5 bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-xl font-semibold font-['Pretendard']">
              로그인
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
