'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import CarImage from '@/app/(client)/driver-registration/components/CarImage';
import CarNumber from '@/app/(client)/driver-registration/components/CarNumber';
import PhoneNumber from '@/app/(client)/driver-registration/components/PhoneNumber';
import ProgressBar from '@/app/(client)/driver-registration/components/ProgressBar';

import { usePostMemberDriver } from '@/app/(client)/driver-registration/apis/postMemberDriver';

import { DriverRegistrationStep } from '@/app/(client)/driver-registration/constants';

import { DriverRegistrationFormValues } from '@/app/(client)/driver-registration/components/Form/schema';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

const DriverRegistrationFunnel = () => {
  const router = useRouter();

  const [step, setStep] = useState(DriverRegistrationStep.CarImage);

  const { mutateAsync: postMemberDriver } = usePostMemberDriver();

  const handleNext = (value: DriverRegistrationStep) => {
    setStep(value);
  };

  const handleSubmit = useCallback(
    async (values: DriverRegistrationFormValues) => {
      const { carImage, ...rest } = values;

      // TODO: 이미지 S3 업로드 API 구현 시 변경 예정
      try {
        await postMemberDriver({
          carImage: carImage.name,
          ...rest,
        });
        router.push(CLIENT_APP_ROUTES.DRIVER_REGISTRATION_DONE);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    },
    [postMemberDriver, router],
  );

  switch (step) {
    case DriverRegistrationStep.CarNumber:
      return (
        <>
          <ProgressBar step={step} />
          <CarNumber
            onNext={() => handleNext(DriverRegistrationStep.PhoneNumber)}
          />
        </>
      );
    case DriverRegistrationStep.PhoneNumber:
      return (
        <>
          <ProgressBar step={step} />
          <PhoneNumber onSubmit={handleSubmit} />
        </>
      );
    default:
      return (
        <>
          <ProgressBar step={step} />
          <CarImage
            onNext={() => handleNext(DriverRegistrationStep.CarNumber)}
          />
        </>
      );
  }
};

export default DriverRegistrationFunnel;
