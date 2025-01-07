/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MonthCalendar from "@/app/components/monthCalendar";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const AdminPage: React.FC = () => {
  const router = useRouter();

  // 페이징 관련 상태 추가
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = 216; // 전체 예약 수
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [yearEnd, setYearEnd] = useState(0);
  const [monthEnd, setMonthEnd] = useState(0);
  const [dayEnd, setDayEnd] = useState(0);

  const calendarRef1 = useRef<HTMLDivElement>(null);
  const calendarRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef1.current &&
        !calendarRef1.current.contains(event.target as Node) &&
        dropdown
      ) {
        setDropdown(false);
      }

      if (
        calendarRef2.current &&
        !calendarRef2.current.contains(event.target as Node) &&
        dropdown2
      ) {
        setDropdown2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown, dropdown2]);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 페이지 번호 배열 생성
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  // 현재 페이지에 해당하는 아이템들만 표시
  const currentItems = Array.from(
    { length: itemsPerPage },
    (_, index) => index + 1 + (currentPage - 1) * itemsPerPage
  ).filter((num) => num <= totalItems);

  return (
    <div className="w-screen">
      <div className="fixed left-0 top-0 w-full h-[118px] px-[200px] pt-[30px] pb-[35px] bg-[#3c3c3c] justify-start items-center gap-[150px] inline-flex">
        <div
          className="justify-start items-center gap-2.5 flex"
          onClick={() => router.push("/admin")}
        >
          <div className="text-center">
            <span className="text-[#007aff] text-[40px] font-normal font-['Hancom Sans SemiBold']">
              mate
            </span>
            <span className="text-white text-[40px] font-normal font-['Hancom Sans SemiBold']">
              admin
            </span>
          </div>
        </div>
        <div className="pt-[5px] justify-start items-center gap-[120px] flex">
          <div
            onClick={() => router.push("/admin/main")}
            className="opacity-50 cursor-pointer text-white text-2xl font-bold font-['Pretendard'] leading-[38.40px]"
          >
            회원 관리
          </div>
          <div className="cursor-pointer text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]">
            예약 관리
          </div>
          <div
            onClick={() => router.push("/admin/report")}
            className="cursor-pointer opacity-50 text-white text-2xl font-semibold font-['Pretendard'] leading-[38.40px]"
          >
            신고 관리
          </div>
        </div>
      </div>
      <div className="w-full h-[910px] jusity-center items-center flex-col inline-flex bg-[#f7f7f7] pt-[150px]">
        <div className="mx-[200px] w-[1520px] flex justify-center items-center flex-col">
          <div className="w-full  justify-between items-center gap-[70px] inline-flex mb-[20px]">
            <div className="text-[#3c3c3c] text-4xl font-semibold font-['Pretendard'] leading-7 w-full text-left">
              예약 관리
            </div>
            <div className=" px-[50px] justify-center items-center gap-5 inline-flex">
              <div className="w-[295px] self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                    시작일
                  </div>
                </div>
                <div className="self-stretch h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-between items-center inline-flex">
                  <div className="text-[#b2b2b2] text-lg font-medium font-['Pretendard']">
                    {day && month && year
                      ? `${year}-${month}-${day}`
                      : "시작 날짜"}
                  </div>

                  <div className="w-5 h-5 relative  ">
                    <div className="w-[15px] h-[16.67px] left-[2.50px] top-[1.67px] absolute ">
                      <svg
                        onClick={() => setDropdown(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <g id="lucide:calendar">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M6.66797 2.16797V5.5013M13.3346 2.16797V5.5013"
                              stroke="#C3C3C3"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M15.8333 3.83398H4.16667C3.24619 3.83398 2.5 4.58018 2.5 5.50065V17.1673C2.5 18.0878 3.24619 18.834 4.16667 18.834H15.8333C16.7538 18.834 17.5 18.0878 17.5 17.1673V5.50065C17.5 4.58018 16.7538 3.83398 15.8333 3.83398Z"
                              stroke="#C3C3C3"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M2.5 8.83398H17.5"
                              stroke="#C3C3C3"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </g>
                      </svg>
                      <div ref={calendarRef1}>
                        {dropdown && (
                          <MonthCalendar
                            setYear={setYear}
                            setDay={setDay}
                            setMonth={setMonth}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                ~
              </div>
              <div className="w-[295px] self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                    종료일
                  </div>
                </div>
                <div className="self-stretch h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-between items-center inline-flex">
                  <div className="text-[#b2b2b2] text-lg font-medium font-['Pretendard']">
                    {dayEnd && monthEnd && yearEnd
                      ? `${yearEnd}-${monthEnd}-${dayEnd}`
                      : "종료 날짜"}
                  </div>

                  <div className="w-5 h-5 relative ">
                    <div className="w-[15px] h-[16.67px] left-[2.50px] top-[1.67px] absolute">
                      <svg
                        onClick={() => setDropdown2(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <g id="lucide:calendar">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M6.66797 2.16797V5.5013M13.3346 2.16797V5.5013"
                              stroke="#C3C3C3"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M15.8333 3.83398H4.16667C3.24619 3.83398 2.5 4.58018 2.5 5.50065V17.1673C2.5 18.0878 3.24619 18.834 4.16667 18.834H15.8333C16.7538 18.834 17.5 18.0878 17.5 17.1673V5.50065C17.5 4.58018 16.7538 3.83398 15.8333 3.83398Z"
                              stroke="#C3C3C3"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M2.5 8.83398H17.5"
                              stroke="#C3C3C3"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </g>
                      </svg>
                      <div ref={calendarRef2}>
                        {dropdown2 && (
                          <MonthCalendar
                            setYear={setYearEnd}
                            setDay={setDayEnd}
                            setMonth={setMonthEnd}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[60px] w-[1520px] py-5 justify-start items-center inline-flex bg-white rounded-[10px] pl-[140px]">
            <div className="justify-start items-start flex">
              <div className="justify-start items-center flex">
                <div className="w-[180px] h-[20px] justify-start items-center gap-2.5 flex">
                  <div className="text-center text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    등록일
                  </div>
                </div>
                <div className="w-[180px] h-[20px] justify-start items-center gap-2.5 flex">
                  <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    출발지
                  </div>
                </div>
                <div className="w-[180px] h-[20px] justify-start items-center gap-2.5 flex">
                  <div className="text-center text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    도착지
                  </div>
                </div>
              </div>
              <div className="justify-start items-center flex">
                <div className="mr-[100px] ml-[10px] w-[180px] h-[20px] justify-start items-center gap-2.5 flex">
                  <div className="text-center text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    탑승 인원
                  </div>
                </div>
                <div className="w-[180px] h-[20px] justify-start items-center gap-2.5 flex">
                  <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    드라이버
                  </div>
                </div>
                <div className="w-[180px] h-[20px] justify-start items-center gap-2.5 flex">
                  <div className="text-[#3c3c3c] text-xl font-semibold font-['Pretendard'] leading-7">
                    차량 번호
                  </div>
                </div>
                <div className="w-[180px] h-[20px]" />
              </div>
            </div>
          </div>

          {currentItems.map((el, index) => {
            return (
              <div
                key={index}
                className="w-[1520px] flex items-center pl-[60px] border-t border-[#e0e0e0] py-[5px] bg-white"
              >
                <div className="ml-[60px] w-[992.37px] h-[50px] justify-start items-start inline-flex">
                  <div className="justify-start items-center flex">
                    <div className="w-[180px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        12/28
                      </div>
                    </div>
                    <div className="w-[180px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        ㅇㅇ시 ㅇㅇ동
                      </div>
                    </div>
                    <div className="w-[180px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        ㅇㅇ대학교
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center flex">
                    <div className="w-[180px] ml-[20px] mr-[100px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        4/4
                      </div>
                    </div>
                    <div className="w-[180px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        김ㅇㅇㅇ
                      </div>
                    </div>
                    <div className="w-[180px] h-[50px] flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-[#3c3c3c] text-xl font-normal font-['Pretendard'] leading-7">
                        12가1232
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => router.push(`/admin/promiseDetail?id=${el}`)}
                  className="ml-[230px] cursor-pointer h-10 pl-3 pr-2.5 py-1.5 rounded-lg border border-[#dadada] justify-start items-center gap-3 inline-flex"
                >
                  <div className="opacity-60 text-center text-[#3c3c3c] text-lg font-medium font-['Pretendard'] leading-7">
                    상세 정보
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="none"
                  >
                    <path
                      id="Rectangle 882"
                      d="M1 1L5.88953 4.25968C6.4178 4.61187 6.4178 5.38813 5.88952 5.74032L1 9"
                      stroke="#B2B2B2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}

          {/* 페이지네이션 UI */}
          <div className="flex items-center justify-center gap-2 mt-8 mb-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-[#dadada] disabled:opacity-50"
            >
              이전
            </button>

            {getPageNumbers().map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === pageNum
                    ? "bg-[#007aff] text-white"
                    : "border border-[#dadada] text-[#3c3c3c]"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-[#dadada] disabled:opacity-50"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
