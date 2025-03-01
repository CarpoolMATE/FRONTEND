'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { useMemberStore } from '@/store/member';

import { CarpoolRegistrationFormValues } from '@/app/(client)/carpool-registration/components/Form/schema';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import DestinationSummary from '@/app/(client)/home/components/DestinationSummary';
import ProfileImage from '@/components/Image/Profile';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

const Check = () => {
  const router = useRouter();

  const { member } = useMemberStore();

  const { watch } = useFormContext<CarpoolRegistrationFormValues>();

  const departureTime = new Date(
    new Date().setHours(watch('startTime'), watch('startMinute'), 0, 0),
  );

  const [modalOpen, setModalOpen] = useState(false);

  const onConfirmHandle = () => {};

  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <Modal
        isOpen={modalOpen}
        title="카풀생성을 취소하시겠어요?"
        message="작성중이던 내용은 저장되지 않습니다."
        closeText="아니오"
        confirmText="네, 취소할래요"
        onConfirm={() => router.back()}
        onClose={() => setModalOpen(false)}
      />
      <div className="px-5 pt-12">
        <span className="font-bold text-2xl">카풀 미리보기</span>
        <div className="grid grid-cols-2 pt-[50px] pb-10 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-placeholder">드라이버</span>
            <div className="flex gap-2 items-center">
              <ProfileImage
                url={member?.profileImage ?? ''}
                className="border border-placeholder"
              />
              <span>{member?.nickname}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-placeholder">차량정보</span>
            <div className="flex gap-2 items-center">
              <ProfileImage
                url={member?.carImage ?? ''}
                className="border border-placeholder"
              />
              <span>{member?.carNumber}</span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-[25px] flex">
          <DestinationSummary
            data={{
              ...watch(),
              departureTime: String(departureTime),
              reservationCount: 0,
              departureCoordinate: 'ㅠㅠㅕㅕ',
            }}
          />
        </div>
      </div>

      <div className="mt-auto p-5 flex gap-3">
        <Button intent="outline" onClick={() => setModalOpen(true)}>
          취소
        </Button>
        <Button onClick={onConfirmHandle}>카풀 생성하기</Button>
      </div>
    </section>
  );
};

export default Check;
