'use client';

import Link from 'next/link';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import ProfileImage from '@/components/Image/Profile';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { ReservationModalProps } from '@/app/(client)/home/components/Modal/ReservationModal/types';
import DestinationSummary from '@/app/(client)/home/components/DestinationSummary';

const ReservationModal = ({ data, onClose }: ReservationModalProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-end z-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-[768px] w-full min-h-[60dvh] h-fit px-5 py-4 bg-white rounded-t-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] flex flex-col"
      >
        <div className="flex justify-end">
          <Button className="size-6" intent="icon" onClick={onClose}>
            <Icon icon="CLOSE" />
          </Button>
        </div>

        <div className="w-full flex-col justify-start items-start gap-[20px] inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-[25px] flex">
            <div className="self-stretch grow shrink justify-start items-center gap-3 flex">
              <ProfileImage url="https://placehold.co/44/png" />
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <p className="text-placeholder text-sm font-medium">드라이버</p>
                <span className="font-medium">{'{이름}'}</span>
              </div>
            </div>

            <DestinationSummary />
          </div>
        </div>

        <div className="w-full mt-auto">
          <Link href={CLIENT_APP_ROUTES.CONFIRM_RESERVATION}>
            <Button>예약하기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
