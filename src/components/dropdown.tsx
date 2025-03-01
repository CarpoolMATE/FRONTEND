import { useState } from 'react';

type DropdownProps = {
  value: number;
  onChangeNumber: (value: number) => void;
  selectValues: number[];
  indexString: string;
  placeHolder?: string;
};

export const Dropdown = ({
  value,
  onChangeNumber,
  selectValues,
  indexString,
  placeHolder = '시간',
}: DropdownProps) => {
  const [more, setMore] = useState(false);

  const onChangeHandle = (v: number) => {
    onChangeNumber(v);
    setMore(false);
  };

  return (
    <div className={`w-full`}>
      <div className="flex gap-4 w-full">
        <div className="relative w-full">
          <button
            onClick={() => setMore((prev) => !prev)}
            className="w-full h-12 px-4 text-left bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 flex justify-between items-center"
          >
            <span className={value ? 'text-default' : 'text-placeholder'}>
              {value}
              {value ? indexString : placeHolder}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                more ? 'rotate-180' : ''
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

          {more && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {selectValues?.map((v) => (
                <button
                  key={v}
                  onClick={() => onChangeHandle(v)}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none
					${value === v ? 'bg-blue-50 text-blue-600' : ''}`}
                >
                  {v}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
