'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import ProfileImage from '@/components/Image/Profile';
import DestinationSummary from '@/app/(client)/home/components/DestinationSummary';

import { useMemberStore } from '@/store/member';

import { usePostReservation } from '@/app/(client)/home/apis/postReservation';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { ReservationModalProps } from '@/app/(client)/home/components/Modal/ReservationModal/types';

import { cn } from '@/utils/style';

const ReservationModal = ({ data, onClose }: ReservationModalProps) => {
  const router = useRouter();
  const { driverImg, driverName, reservationCount, capacity, carpoolId } = data;
  const { member } = useMemberStore();

  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  const isCapacityFull = reservationCount === capacity;
  const isReservation = member?.reservation;

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300);
  };

  const { mutate: postReservation } = usePostReservation();

  const handleReservation = useCallback(() => {
    postReservation(
      { carpoolId },
      {
        onSuccess: () => {
          router.push(CLIENT_APP_ROUTES.RESERVATION_DETAIL);
        },
      },
    );
  }, [carpoolId, router, postReservation]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      onClick={handleClose}
      className={cn(
        'fixed top-0 left-0 w-full h-full z-50 flex justify-center items-end bg-[rgba(0,0,0,0.5)] transition-opacity duration-300',
        mounted && !closing ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(
          'max-w-[768px] w-full min-h-[60dvh] h-fit px-5 py-4 bg-white rounded-t-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] transition-transform duration-300 flex flex-col',
          mounted && !closing ? 'translate-y-0' : 'translate-y-full',
        )}
      >
        <div className="flex justify-end">
          <Button className="size-6" intent="icon" onClick={handleClose}>
            <Icon icon="CLOSE" />
          </Button>
        </div>

        <div className="w-full flex-col justify-start items-start gap-[20px] inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-[25px] flex">
            <div className="self-stretch grow shrink justify-start items-center gap-3 flex">
              <ProfileImage url={driverImg} />
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <p className="text-placeholder text-sm font-medium">드라이버</p>
                <span className="font-medium">{driverName}</span>
              </div>
            </div>

            <DestinationSummary data={data} showMapIcon />
          </div>
        </div>

        <div className="w-full mt-auto flex-col flex gap-3">
          {isReservation && (
            <p className="text-center text-error text-sm font-medium">
              이미 진행중인 카풀이 있어요
            </p>
          )}

          <Button
            disabled={isCapacityFull || isReservation}
            onClick={handleReservation}
          >
            예약하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
