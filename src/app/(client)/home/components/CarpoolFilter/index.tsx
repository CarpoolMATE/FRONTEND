'use client';

import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { addDays, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Icon from '@/components/Icon';

import {
  CarpoolSearchKey,
  SORT_OPTIONS,
} from '@/app/(client)/home/components/CarpoolFilter/constants';
import { CarpoolType } from '@/app/(client)/home/apis/getCarpoolList/constants';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { cn } from '@/utils/style';

const CarpoolFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showSort, setShowSort] = useState<boolean>(false);

  const ulRef = useRef<HTMLUListElement>(null);

  const tomorrow = useMemo(
    () => format(addDays(new Date(), 1), 'MM/dd(E)', { locale: ko }),
    [],
  );

  const filter =
    (searchParams.get(CarpoolSearchKey.Filter) as CarpoolType) ||
    CarpoolType.Default;

  const getCurrentColor = (value: CarpoolType) => {
    const isActive = filter === value;

    return isActive ? 'text-default' : 'text-placeholder';
  };

  const handleChangeAcitve = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      router.push(
        `${CLIENT_APP_ROUTES.HOME}?${CarpoolSearchKey.Filter}=${CarpoolType.Active}`,
      );
      return;
    }

    router.push(`${CLIENT_APP_ROUTES.HOME}`);
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
        <span className="text-primary text-lg font-semibold">{tomorrow}</span>
        <span className="text-lg font-semibold"> 카풀 목록</span>
      </div>

      <div className="self-stretch justify-between items-center inline-flex relative">
        <div className="px-[5px] justify-start items-center gap-3 flex">
          <input
            id="checkbox"
            className="w-[14.60px] h-[14.60px] relative rounded border border-input"
            checked={filter === CarpoolType.Active}
            onChange={handleChangeAcitve}
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
          <span className="text-sm font-medium">
            {SORT_OPTIONS.find((item) => item.value === filter)?.label ??
              '필터'}
          </span>
          <Icon icon="CHEVRONS_BOTTOM" className="w-2 h-2" />
        </button>

        {showSort && (
          <ul
            ref={ulRef}
            className="top-7 z-10 absolute right-0 h-fit py-[7.5px] bg-white rounded-[10px] shadow-[3px_3px_8px_0px_rgba(0,0,0,0.10)] border border-input flex flex-col"
          >
            {SORT_OPTIONS.map(({ value, label }) => (
              <li key={value} className="flex-1 flex px-[1.25rem] py-[7.5px]">
                <Link
                  href={
                    filter === value
                      ? CLIENT_APP_ROUTES.HOME
                      : `${CLIENT_APP_ROUTES.HOME}?${CarpoolSearchKey.Filter}=${value}`
                  }
                  onClick={() => setShowSort(false)}
                  className={cn(getCurrentColor(value), 'text-sm font-medium')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CarpoolFilter;
