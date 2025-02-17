'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ProfileCardProps } from '@/app/profile/components/apis/types';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import SegmentControl from '@/app/profile/components/Segment';
import ProfileCard from '@/app/profile/components/ProfileCard';

const ProfilePage: React.FC = () => {
  const router = useRouter();

  const [isPassinger, setIsPassinger] = useState(true);

  const [data] = useState<ProfileCardProps[]>([
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
    {
      date: '11/28',
      from: '행복동 출발',
      headCount: 3,
      maxCount: 6,
      price: 1500,
      time: '오전 8시 30분',
    },
  ]);

  return (
    <section className="w-full bg-gray_light flex flex-col h-screen">
      <header className="relative flex items-center justify-center px-4 py-5 h-full max-h-16 bg-white">
        <Button
          className="absolute left-2 p-2"
          intent="icon"
          onClick={router.back}
        >
          <Icon icon="CHEVRONS_LEFT" className="text-icon" />
        </Button>
        <div className="font-semibold text-xl text-title">
          <SegmentControl
            isPassinger={isPassinger}
            setIsPassinger={setIsPassinger}
          />
        </div>
      </header>
      <div className="bg-white w-full h-[250px] mb-3 px-4 py-5 flex flex-col gap-5 items-center">
        <div className="relative flex items-center justify-center w-full">
          <h1 className="text-default text-xl font-semibold">
            {isPassinger ? '프로필' : '차량 정보'}
          </h1>
          <span className="absolute right-0 top-0 text-placeholder cursor-pointer">
            수정
          </span>
        </div>
        <div className="w-20 h-20 rounded-full bg-red-500 relative cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray_light absolute right-0 bottom-0 text-placeholder flex items-center justify-center">
            <Icon icon="PENCLE" />
          </div>
        </div>
        <div className="w-full flex justify-between text-sm font-medium">
          <p className="text-placeholder">
            {isPassinger ? '닉네임' : '차량 번호'}
          </p>
          <p className="text-default">차량 번호</p>
        </div>
        <div className="w-full flex justify-between text-sm font-medium">
          <p className="text-placeholder">
            {isPassinger ? '아이디' : '전화 번호'}
          </p>
          <p className="text-default">차량 번호</p>
        </div>
      </div>
      <div className="px-4 pt-5 mb-2 bg-white w-full h-[calc(100%-326px)]">
        <h2 className="text-default text-xl font-semibold mb-2">
          최근 {isPassinger ? '탑승' : '운행'} 목록
        </h2>
        <div className="w-full h-[calc(100%-35px)] overflow-y-scroll">
          {data.map((v, idx) => (
            <ProfileCard key={idx} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
