'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Button from '@/components/Button';

const ResultPage = () => {
  const params = useSearchParams();

  return (
    <section className="h-[calc(100%-64px)] pt-[46px] flex flex-col items-center justify-between pb-4 px-5">
      <div className="flex flex-col items-center gap-[104px]">
        <p className="text-[24px] text-[#3C3C3C] font-medium text-center">
          {params.get('nickname')}님의 아이디는
          <br />
          <span className="text-[#007AFF]">{params.get('memberId')}</span>
          입니다
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="133"
          height="133"
          viewBox="0 0 133 133"
          fill="none"
        >
          <g id="Group" opacity="0.3">
            <path
              id="Vector"
              d="M66.5 127.109C74.5121 127.119 82.4471 125.546 89.8493 122.48C97.2514 119.414 103.975 114.915 109.633 109.242C115.306 103.584 119.804 96.8608 122.87 89.4587C125.936 82.0565 127.51 74.1214 127.5 66.1094C127.51 58.0973 125.936 50.1622 122.87 42.7601C119.804 35.3579 115.306 28.6346 109.633 22.9763C103.975 17.3038 97.2514 12.8052 89.8493 9.73906C82.4471 6.67288 74.5121 5.09954 66.5 5.10942C58.4879 5.09954 50.5529 6.67288 43.1507 9.73906C35.7486 12.8052 29.0252 17.3038 23.3669 22.9763C17.6944 28.6346 13.1959 35.3579 10.1297 42.7601C7.06351 50.1622 5.49017 58.0973 5.50005 66.1094C5.49017 74.1214 7.06351 82.0565 10.1297 89.4587C13.1959 96.8608 17.6944 103.584 23.3669 109.242C29.0252 114.915 35.7486 119.414 43.1507 122.48C50.5529 125.546 58.4879 127.119 66.5 127.109Z"
              stroke="#007AFF"
              strokeWidth="10"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M42.1016 66.1125L60.4015 84.4125L97.0015 47.8125"
              stroke="#007AFF"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <Button>
        <Link href={CLIENT_APP_ROUTES.LOGIN}>로그인</Link>
      </Button>
    </section>
  );
};

export default ResultPage;
