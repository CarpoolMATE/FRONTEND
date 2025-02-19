'use client';

import { useState, useRef, useEffect } from 'react';

import { ProfileCardProps } from '@/app/profile/components/apis/types';

import Icon from '@/components/Icon';

const ProfileCard = ({
  date,
  from,
  headCount,
  maxCount,
  price,
  time,
}: ProfileCardProps) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setTooltipVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      ref={cardRef}
      className="h-[105px] w-full flex justify-between items-center border-b-space border-b px-4 py-5 relative"
    >
      {tooltipVisible && (
        <div className="absolute font-medium text-sm flex items-center justify-center rounded-xl bg-white text-default border border-space w-20 h-10 right-9 cursor-pointer">
          신고하기
        </div>
      )}
      <div className="flex flex-col gap-3">
        <span className="text-default">{date}</span>
        <span className="text-gray-dark font-semibold">
          {from} 출발 | {price}원
        </span>
        <span className="text-default font-semibold">{time}</span>
      </div>
      <div className="flex h-full items-center gap-5">
        <span className="rounded-2xl bg-gray-dark text-white h-9 w-[52px] flex items-center justify-center">
          {headCount}/{maxCount}
        </span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setTooltipVisible((prev) => !prev);
          }}
        >
          <Icon icon="DOTS" className="cursor-pointer text-[#666666]" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
