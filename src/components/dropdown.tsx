import { useState } from 'react';

type DropdownProps = {
  selectedNumber: number;
  type?: string;
  onNumberChange: (value: number) => void;
};

export const Dropdown = ({
  selectedNumber,
  onNumberChange,
  type,
}: DropdownProps) => {
  const [isNumberOpen, setIsNumberOpen] = useState(false);

  // 시간 옵션 생성 (0-23)
  const hours = Array.from({ length: 4 }, (_, i) => i + 1);

  const handleHourClick = () => {
    setIsNumberOpen(!isNumberOpen);
  };

  return (
    <div className={`w-full`}>
      <div className="flex gap-4">
        <div className="relative">
          <button
            onClick={handleHourClick}
            className="w-[335px] h-12 px-4 text-left bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 flex justify-between items-center"
          >
            <span className="text-gray-700">
              {selectedNumber !== 0
                ? `${selectedNumber}${type === 'price' ? '원' : '명'}`
                : `${
                    type == 'price'
                      ? '비용을 입력해주세요'
                      : '탑승 최대 인원을 선택해주세요'
                  }`}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isNumberOpen ? 'rotate-180' : ''
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

          {isNumberOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {hours.map((h) => (
                <button
                  key={h}
                  onClick={() => {
                    onNumberChange(h);
                    setIsNumberOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none
					${selectedNumber === h ? 'bg-blue-50 text-blue-600' : ''}`}
                >
                  {h}명
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
