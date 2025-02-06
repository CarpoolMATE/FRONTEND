'use client';

import { useState } from 'react';

const ToggleSwitch = ({ initialState = false, onChange, which }: any) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div className="flex items-center gap-[30px]">
      <button
        onClick={handleToggle}
        className={`relative w-16 h-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
          isOn ? 'bg-blue-500' : 'bg-gray-200'
        }`}
        aria-pressed={isOn}
        type="button"
      >
        <span className="sr-only">{isOn ? '켜짐' : '꺼짐'}</span>
        <div
          className={`absolute left-0.5 top-0.5 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-200 ${
            isOn ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>
      <div
        className={`${
          isOn ? 'text-[#007aff]' : 'opacity-50 text-center text-[#3c3c3c]'
        } text-center  text-xl font-semibold font-['Pretendard'] leading-7`}
      >
        {which && (isOn ? '처리완료' : '처리중')}
        {!which && (isOn ? '활성화' : '비활성화')}
      </div>
    </div>
  );
};

export default ToggleSwitch;
