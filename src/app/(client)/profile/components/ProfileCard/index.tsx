'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { GetProfileCarpoolListDto } from '@/app/(client)/profile/apis/types';

import { formatComma } from '@/utils/format';

import Icon from '@/components/Icon';

const ProfileCard = (props: GetProfileCarpoolListDto) => {
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
        <Link
          href={CLIENT_APP_ROUTES.REPORT + `/${props.carpoolId}`}
          className="absolute font-medium text-sm flex items-center justify-center rounded-xl bg-white text-default border border-space w-20 h-10 right-9 cursor-pointer"
        >
          신고하기
        </Link>
      )}
      <div className="flex flex-col gap-3">
        <span className="text-default">{format(props.createAt, 'MM/dd')}</span>
        <span className="text-gray-dark font-semibold">
          {props.departureCoordinate} 출발 | {formatComma(props.cost)}원
        </span>
        <span className="text-default font-semibold">
          {format(props.departureTime, 'a h시 mm분', { locale: ko })}
        </span>
      </div>
      <div className="flex h-full items-center gap-5">
        <div className="rounded-2xl bg-gray-dark text-white h-9 w-[52px] flex items-center justify-center">
          {props.reservationCount}/{props.capacity}
        </div>
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
