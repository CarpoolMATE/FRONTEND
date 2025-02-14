'use client';

import { useEffect, useRef, useState } from 'react';

import Icon from '@/components/Icon';

import { SORT_OPTIONS } from '@/app/(client)/home/components/CarpoolFilter/constants';
import { SortOption } from '@/app/(client)/home/constants';

import { cn } from '@/utils/style';

const CarpoolFilter = () => {
  const [showSort, setShowSort] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [sort, setSort] = useState<SortOption>(SortOption.FASTEST);

  const ulRef = useRef<HTMLUListElement>(null);

  const getCurrentColor = (isActive: boolean) => {
    return isActive ? 'text-default' : 'text-placeholder';
  };

  useEffect(() => {
    const handleClickOutside = (event: TouchEvent) => {
      if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
        setShowSort(false);
      }
    };

    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full mt-5 py-5 flex-col justify-start items-start gap-6 inline-flex">
      <div>
        <span className="text-primary text-lg font-semibold">12/27(금)</span>
        <span className="text-lg font-semibold">OO대 카풀 목록</span>
      </div>

      <div className="self-stretch justify-between items-center inline-flex relative">
        <div className="px-[5px] justify-start items-center gap-3 flex">
          <input
            id="checkbox"
            className="w-[14.60px] h-[14.60px] relative rounded border border-input"
            onChange={() => setCheck(!check)}
            type="checkbox"
          />

          <label
            htmlFor="checkbox"
            className="text-sub text-sm font-medium cursor-pointer"
          >
            모집 중인 카풀만 보기
          </label>
        </div>

        <button
          className=" flex items-center gap-2.5 text-sub "
          onClick={() => setShowSort((prev) => !prev)}
        >
          <span className="text-sm font-medium">{sort}</span>
          <Icon icon="CHEVRONS_BOTTOM" className="w-2 h-2" />
        </button>

        {showSort && (
          <ul
            ref={ulRef}
            className="top-7 z-10 absolute right-0 h-fit py-[7.5px] bg-white rounded-[10px] shadow-[3px_3px_8px_0px_rgba(0,0,0,0.10)] border border-input flex flex-col"
          >
            {SORT_OPTIONS.map(({ value, label }) => (
              <li key={value} className="flex-1 flex px-[1.25rem] py-[7.5px]">
                <button
                  onClick={() => {
                    setShowSort(false);
                    setSort(value);
                  }}
                  className={cn(
                    getCurrentColor(sort === value),
                    'text-sm font-medium',
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CarpoolFilter;
