'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { useGetReservationDetail } from '@/app/(client)/reservation-detail/apis/getReservationDetail';
import { useDeleteCarpool } from '@/app/(client)/reservation-detail/apis/deleteCarpool';

import { DELETE_CARPOOL_MODAL_VALUES_CLASSES } from '@/app/(client)/reservation-detail/apis/deleteCarpool/constants';

import { DeleteCarpoolType } from '@/app/(client)/reservation-detail/apis/deleteCarpool/types';

import DestinationSummary from '@/app/(client)/home/components/DestinationSummary';
import ProfileRow from '@/app/(client)/reservation-detail/components/ProfileRow';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Modal from '@/components/Modal';

const ReservationDetail = () => {
  const router = useRouter();

  const { data } = useGetReservationDetail();

  const { mutateAsync: deleteCarpool } = useDeleteCarpool();

  const type: DeleteCarpoolType = data?.amIDriver
    ? 'deleteCarpool'
    : 'cancelCarpool';

  const [modalType, setModalType] = useState<DeleteCarpoolType>();
  const [errorText, setErrorText] = useState('');

  const onClickDeleteHandle = () => {
    setModalType(type);
  };

  const onModalConfirmHandle = async () => {
    try {
      const response = await deleteCarpool({
        type,
      });
      if (response.data) {
        router.back();
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorText(error.message);
      }
    }
  };

  const onModalCloseHandle = () => {
    setErrorText('');
    setModalType(undefined);
  };

  return (
    <section className="flex flex-col h-full justify-between">
      <header className="relative flex items-center justify-center px-4 py-5 h-full max-h-16 bg-white">
        <Button
          className="absolute left-2 p-2"
          intent="icon"
          onClick={router.back}
        >
          <Icon icon="CHEVRONS_LEFT" className="text-icon" />
        </Button>
        <div className="font-semibold text-xl text-title">
          카풀 예약 확인{data?.amIDriver && '(드라이버)'}
        </div>
      </header>
      <div className={`p-5 flex flex-col justify-between overflow-y-scroll`}>
        <Modal
          onClose={onModalCloseHandle}
          isOpen={!!modalType || !!errorText}
          title={
            modalType
              ? DELETE_CARPOOL_MODAL_VALUES_CLASSES[modalType].title
              : ''
          }
          message={
            modalType ? DELETE_CARPOOL_MODAL_VALUES_CLASSES[modalType].text : ''
          }
          confirmText="네, 취소할래요"
          closeText={!!modalType ? '아니오' : undefined}
          {...(!!modalType ? { onConfirm: onModalConfirmHandle } : {})}
        />
        {data && (
          <>
            <div className="w-full flex-col justify-start items-start gap-[20px] inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-[25px] flex">
                <DestinationSummary data={data.carpoolInfo} />
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 text-sm text-placeholder">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <span>드라이버</span>
                  <ProfileRow
                    url={data.carpoolInfo.driverImg ?? ''}
                    text={data.carpoolInfo.driverName}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span>차량정보</span>
                  <ProfileRow
                    url={data.carpoolInfo.carImg ?? ''}
                    text={data.carpoolInfo.carNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="mb-2">패신저</span>
                <div className="flex flex-col gap-2">
                  {data.passengers.length !== 0
                    ? data.passengers.map((v) => (
                        <ProfileRow
                          key={v.passengerName}
                          url={v.passengerImg}
                          text={v.passengerName}
                        />
                      ))
                    : '아직 승객이 없습니다.'}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-auto flex flex-col gap-2 p-5">
        <Link
          href={data?.carpoolInfo.chatLink ?? ''}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button intent="outline">오픈카톡 참여하기</Button>
        </Link>
        <Button intent="delete" onClick={onClickDeleteHandle}>
          {data?.amIDriver ? '카풀 삭제' : '예약 취소'}하기
        </Button>
      </div>
    </section>
  );
};

export default ReservationDetail;
