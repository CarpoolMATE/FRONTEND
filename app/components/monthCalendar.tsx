/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";

const monthNames = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

interface MonthCalendarProps {
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDay: (day: number) => void;
}

const MonthCalendar = ({ setYear, setMonth, setDay }: MonthCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePrevMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }, []);

  const handleDateClick = useCallback(
    (date: number, month: number, year: number) => {
      const newSelectedDate = new Date(year, month, date);
      setSelectedDate(newSelectedDate);

      // 부모 컴포넌트로 선택된 날짜 정보 전달
      setYear(year);
      setMonth(month + 1); // JavaScript의 month는 0부터 시작하므로 1을 더해줍니다
      setDay(date);
    },
    [setYear, setMonth, setDay]
  );

  // 달력 날짜 계산 함수
  const getMonthCalendarDates = (year: number, month: number) => {
    const dates = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayWeekday = firstDayOfMonth.getDay();
    const lastDateOfMonth = lastDayOfMonth.getDate();

    // 월요일을 첫 요일로 조정
    const adjustedFirstDayWeekday =
      firstDayWeekday === 0 ? 6 : firstDayWeekday - 1;

    // 이전 달의 날짜 추가
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const prevMonthLastDate = new Date(
      prevMonthYear,
      prevMonth + 1,
      0
    ).getDate();
    for (
      let i = prevMonthLastDate - adjustedFirstDayWeekday + 1;
      i <= prevMonthLastDate;
      i++
    ) {
      dates.push({ date: i, month: prevMonth, year: prevMonthYear });
    }

    // 현재 달의 날짜 추가
    for (let i = 1; i <= lastDateOfMonth; i++) {
      dates.push({ date: i, month: month, year: year });
    }

    // 다음 달의 날짜 추가
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextMonthYear = month === 11 ? year + 1 : year;
    let nextMonthDay = 1;
    while (dates.length % 7 !== 0) {
      dates.push({ date: nextMonthDay, month: nextMonth, year: nextMonthYear });
      nextMonthDay++;
    }

    return dates;
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  return (
    <div className="absolute top-[10px] right-[-20px] z-[100] w-[380px] max-xs:w-full text-center min-h-[400px]  rounded-[10px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.16)] h-full mt-[33px] bg-white">
      <div className="flex items-center py-[16px] px-[23px] bg-white rounded-t-lg">
        <div className="font-bold min-w-[90px]">
          {`${currentYear}년 ${monthNames[currentMonth]}`}
        </div>
        <button
          onClick={handlePrevMonth}
          className="ml-[184px] text-gray-600 hover:text-gray-900 mr-[20px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
          >
            <path
              d="M0.25 8.94922C0.25 8.77995 0.279297 8.6237 0.337891 8.48047C0.402995 8.33724 0.500651 8.20052 0.630859 8.07031L8.23828 0.628906C8.45964 0.414062 8.72656 0.306641 9.03906 0.306641C9.25391 0.306641 9.44596 0.358724 9.61523 0.462891C9.79102 0.560547 9.93099 0.69401 10.0352 0.863281C10.1393 1.03255 10.1914 1.22461 10.1914 1.43945C10.1914 1.74544 10.071 2.01888 9.83008 2.25977L2.97461 8.94922L9.83008 15.6387C10.071 15.8796 10.1914 16.1562 10.1914 16.4688C10.1914 16.6771 10.1393 16.8659 10.0352 17.0352C9.93099 17.2109 9.79102 17.3477 9.61523 17.4453C9.44596 17.5495 9.25391 17.6016 9.03906 17.6016C8.72656 17.6016 8.45964 17.4909 8.23828 17.2695L0.630859 9.82812C0.500651 9.69792 0.402995 9.5612 0.337891 9.41797C0.279297 9.27474 0.25 9.11849 0.25 8.94922Z"
              fill="#007AFF"
            />
          </svg>
        </button>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-900 ml-[20px] mr-[80px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
          >
            <path
              d="M10.7598 8.94922C10.7598 9.11849 10.7272 9.27474 10.6621 9.41797C10.597 9.5612 10.4993 9.69792 10.3691 9.82812L2.76172 17.2695C2.54688 17.4909 2.27995 17.6016 1.96094 17.6016C1.7526 17.6016 1.56055 17.5495 1.38477 17.4453C1.20898 17.3477 1.06901 17.2109 0.964844 17.0352C0.867188 16.8659 0.818359 16.6771 0.818359 16.4688C0.818359 16.1562 0.935547 15.8796 1.16992 15.6387L8.02539 8.94922L1.16992 2.25977C0.935547 2.01888 0.818359 1.74544 0.818359 1.43945C0.818359 1.22461 0.867188 1.03255 0.964844 0.863281C1.06901 0.69401 1.20898 0.560547 1.38477 0.462891C1.56055 0.358724 1.7526 0.306641 1.96094 0.306641C2.27995 0.306641 2.54688 0.414062 2.76172 0.628906L10.3691 8.07031C10.4993 8.20052 10.597 8.33724 10.6621 8.48047C10.7272 8.6237 10.7598 8.77995 10.7598 8.94922Z"
              fill="#007AFF"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-xs p-2 px-[13px]">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day} className="text-gray-600">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 p-2 px-[13px] rounded-b-lg place-items-center">
        {getMonthCalendarDates(currentYear, currentMonth).map(
          ({ date, month, year }, index) => {
            const isCurrentMonth = month === currentMonth;
            const isSelected =
              selectedDate &&
              selectedDate.getFullYear() === year &&
              selectedDate.getMonth() === month &&
              selectedDate.getDate() === date;

            return (
              <div
                key={index}
                className={`relative rounded-[8px] w-[30px] h-[35px] flex flex-col items-center justify-center cursor-pointer text-[12px] ${
                  isCurrentMonth
                    ? isSelected
                      ? "bg-black text-white"
                      : "text-black hover:bg-gray-200"
                    : "text-gray-400"
                }`}
                onClick={() => handleDateClick(date, month, year)}
              >
                {date}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MonthCalendar;
