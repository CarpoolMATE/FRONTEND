/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

export const TimePicker = ({
  selectedHour,
  selectedMinute,
  onHourChange,
  onMinuteChange,
}: any) => {
  const [isHourOpen, setIsHourOpen] = useState(false);
  const [isMinuteOpen, setIsMinuteOpen] = useState(false);

  // 시간 옵션 생성 (0-23)
  const hours = Array.from({ length: 3 }, (_, i) => i + 7);

  // 분 옵션 생성 (0, 10, 20, ..., 50)
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  const handleHourClick = () => {
    setIsHourOpen(!isHourOpen);
    setIsMinuteOpen(false);
  };

  const handleMinuteClick = () => {
    setIsMinuteOpen(!isMinuteOpen);
    setIsHourOpen(false);
  };

  return (
    <div className={`w-full`}>
      <div className="flex gap-4">
        {/* 시간 선택 */}
        <div className="relative">
          <button
            onClick={handleHourClick}
            className="w-40 h-12 px-4 text-left bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 flex justify-between items-center"
          >
            <span className="text-gray-700">
              {selectedHour !== undefined ? `${selectedHour}시` : "시간"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isHourOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isHourOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {hours.map((h) => (
                <button
                  key={h}
                  onClick={() => {
                    onHourChange(h);
                    setIsHourOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none
                    ${selectedHour === h ? "bg-blue-50 text-blue-600" : ""}`}
                >
                  {h}시
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 분 선택 */}
        <div className="relative">
          <button
            onClick={handleMinuteClick}
            className="w-40 h-12 px-4 text-left bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 flex justify-between items-center"
          >
            <span className="text-gray-700">
              {selectedMinute !== undefined ? `${selectedMinute}분` : "분"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isMinuteOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isMinuteOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {minutes.map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    onMinuteChange(m);
                    setIsMinuteOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none
                    ${selectedMinute === m ? "bg-blue-50 text-blue-600" : ""}`}
                >
                  {m}분
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
