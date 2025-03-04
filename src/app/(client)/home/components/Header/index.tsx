'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import ProfileImage from '@/components/Image/Profile';
import DriverRegistrationModal from '@/app/(client)/home/components/Modal/DriverRegistrationModal';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { useMemberStore } from '@/store/member';

const HomeHeader = () => {
  const [showDriverRegistration, setShowDriverRegistration] = useState(false);
  const { member } = useMemberStore();

  const router = useRouter();

  const handleMoveToCreateCarpoolPage = () => {
    if (!member?.isDriver) {
      setShowDriverRegistration(true);
      return;
    }

    router.push(CLIENT_APP_ROUTES.CARPOOL_REGISTRATION);
  };

  return (
    <>
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
          <ProfileImage
            size={38}
            url={member?.profileImage || 'https://placehold.co/38/png'}
          />
        </Link>
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

export default HomeHeader;
