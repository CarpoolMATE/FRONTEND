'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';

import Button from '@/components/Button';
import ReservationCard from '@/app/(client)/home/components/ReservationCard';
import CarpoolFilter from '@/app/(client)/home/components/CarpoolFilter';
import CarpoolList from '@/app/(client)/home/components/CarpoolList';
import ProfileImage from '@/components/Image/Profile';
import DriverRegistrationModal from '@/app/(client)/home/components/Modal/DriverRegistrationModal';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

const HomePage: React.FC = () => {
  const [showDriverRegistration, setShowDriverRegistration] = useState(false);

  const handleMoveToCreateCarpoolPage = () => {
    // TODO: 차량 등록 유무 확인
    setShowDriverRegistration(true);
  };

  return (
    <>
      <div className="px-5 flex flex-col justify-center items-center">
        <div className="h-16 py-4 justify-between items-center inline-flex w-full">
          <Button
            className="w-[117px] h-[40px] text-base font-normal"
            onClick={handleMoveToCreateCarpoolPage}
          >
            카풀 생성하기
          </Button>

          <Link
            href={CLIENT_APP_ROUTES.PROFILE}
            className="cursor-pointer w-fit h-fit relative bg-[#f2f8ff] rounded-full overflow-hidden"
          >
            <ProfileImage size={38} url="https://placehold.co/38/png" />
          </Link>
        </div>

        <ReservationCard />
        <CarpoolFilter />
        <CarpoolList />
      </div>

      {showDriverRegistration &&
        createPortal(
          <DriverRegistrationModal
            onClose={() => setShowDriverRegistration(false)}
          />,
          document.body,
        )}
    </>
  );
};

export default HomePage;
