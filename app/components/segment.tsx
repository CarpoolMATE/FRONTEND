/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

const SegmentControl = ({ setWhich, which }: any) => {
  const tabs = [
    { id: "passenger", label: "패신저" },
    { id: "driver", label: "드라이버" },
  ];

  return (
    <div className="w-[154px]">
      <div className="flex rounded-full bg-gray-100 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setWhich(tab.label)}
            className={`
              w-[61px] flex-1 p-[12px] text-sm rounded-full transition-all duration-200
              ${
                which === tab.label
                  ? "bg-white shadow-sm text-gray-900 font-bold"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SegmentControl;
