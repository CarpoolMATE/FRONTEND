'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { useMemberStore } from '@/store/member';

import useGetProfileCarpoolList from '@/app/(client)/profile/apis/useGetProfileCarpoolList';

import SegmentControl from '@/app/(client)/profile/components/Segment';
import ProfileImageCard from '@/app/(client)/profile/components/ProfileImage';
import ProfileCard from '@/app/(client)/profile/components/ProfileCard';
import DriverRegistrationModal from '@/app/(client)/home/components/Modal/DriverRegistrationModal';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

const ProfilePage = () => {
  const router = useRouter();

  const { member } = useMemberStore();

  const [isPassinger, setIsPassinger] = useState(true);
  const [driverModalVisible, setDriverModalVisible] = useState(false);

  const onChangeIsPassingerHandle = () => {
    if (member?.isDriver) {
      setIsPassinger((prev) => !prev);
    } else {
      setDriverModalVisible(true);
    }
  };

  const { data } = useGetProfileCarpoolList(
    isPassinger ? 'history' : 'driveHis',
  );

  return (
    <section className="w-full bg-gray_light flex flex-col h-screen">
      {driverModalVisible && (
        <DriverRegistrationModal onClose={() => setDriverModalVisible(false)} />
      )}
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
            onClick={onChangeIsPassingerHandle}
          />
        </div>
      </header>
      <div className="bg-white w-full h-[250px] mb-3 px-4 py-5 flex flex-col gap-5 items-center">
        <div className="relative flex items-center justify-center w-full">
          <h1 className="text-default text-xl font-semibold">
            {isPassinger ? '프로필' : '차량 정보'}
          </h1>
          <Link
            href={
              isPassinger
                ? CLIENT_APP_ROUTES.PROFILE_PASSENGER_EDIT
                : CLIENT_APP_ROUTES.PROFILE_DRIVER_EDIT
            }
            className="absolute right-0 top-0 text-placeholder cursor-pointer"
          >
            수정
          </Link>
        </div>
        <ProfileImageCard src={member?.profileImage ?? ''} />
        <div className="w-full flex justify-between text-sm font-medium">
          <p className="text-placeholder">
            {isPassinger ? '닉네임' : '차량 번호'}
          </p>
          <p className="text-default">
            {isPassinger ? member?.nickname : member?.carNumber}
          </p>
        </div>
        <div className="w-full flex justify-between text-sm font-medium">
          <p className="text-placeholder">
            {isPassinger ? '아이디' : '전화 번호'}
          </p>
          <p className="text-default">
            {isPassinger ? member?.memberId : member?.phoneNumber}
          </p>
        </div>
      </div>
      <div className="px-4 pt-5 mb-2 bg-white w-full h-[calc(100%-326px)]">
        <h2 className="text-default text-xl font-semibold mb-2">
          최근 {isPassinger ? '탑승' : '운행'} 목록
        </h2>
        <div className="w-full h-[calc(100%-35px)] overflow-y-scroll">
          {data?.length === 0
            ? `최근 ${isPassinger ? '탑승' : '운행'} 내역이 없습니다. `
            : data?.map((v) => <ProfileCard key={v.carpoolId} data={v} />)}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
