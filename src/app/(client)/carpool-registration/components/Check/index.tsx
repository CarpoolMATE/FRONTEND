'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

import { useMemberStore } from '@/store/member';

import usePostCarpoolRegistration from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/usePostCarpoolRegistration';

import { CarpoolRegistrationFormValues } from '@/app/(client)/carpool-registration/components/Form/schema';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

import DestinationSummary from '@/app/(client)/home/components/DestinationSummary';
import ProfileImage from '@/components/Image/Profile';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

const Check = () => {
  const router = useRouter();

  const { member } = useMemberStore();

  const { watch } = useFormContext<CarpoolRegistrationFormValues>();

  const { mutateAsync: postCarpoolRegistration } = usePostCarpoolRegistration();

  const departureTime = new Date(
    new Date().setHours(watch('startTime'), watch('startMinute'), 0, 0),
  );

  const [isErrorModal, setIsErrorModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const onModalOpenHandle = (text?: string) => {
    if (text) {
      setIsErrorModal(true);
      setModalText(text);
    } else {
      setModalText('작성중이던 내용은 저장되지 않습니다.');
    }
  };

  const onModalCloseHandle = () => {
    setModalText('');
    setIsErrorModal(false);
  };

  const onConfirmHandle = async () => {
    try {
      const result = await postCarpoolRegistration({
        ...watch(),
        departureTime: String(
          format(new Date(departureTime), "yyyy-MM-dd'T'HH:mm:ss"),
        ),

        cost: +watch('cost'),
      });
      if (result.status === 'OK') {
        router.push(CLIENT_APP_ROUTES.CARPOOL_REGISTRATION_DONE);
      }
    } catch (error) {
      if (error instanceof Error) {
        onModalOpenHandle(error.message);
      }
    }
  };

  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <Modal
        isOpen={!!modalText}
        title={!isErrorModal ? '카풀생성을 취소하시겠어요?' : ''}
        message={
          !isErrorModal ? '작성중이던 내용은 저장되지 않습니다.' : modalText
        }
        closeText={!isErrorModal ? '아니오' : '확인'}
        confirmText="네, 취소할래요"
        {...(!isErrorModal ? { onConfirm: () => router.back() } : {})}
        onClose={onModalCloseHandle}
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
            }}
          />
        </div>
      </div>

      <div className="mt-auto p-5 flex gap-3">
        <Button intent="outline" onClick={() => onModalOpenHandle()}>
          취소
        </Button>
        <Button onClick={onConfirmHandle}>카풀 생성하기</Button>
      </div>
    </section>
  );
};

export default Check;
