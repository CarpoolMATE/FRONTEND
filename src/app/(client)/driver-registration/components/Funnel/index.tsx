'use client';

import { useState } from 'react';

import CarImage from '@/app/(client)/driver-registration/components/CarImage';
import CarNumber from '@/app/(client)/driver-registration/components/CarNumber';
import PhoneNumber from '@/app/(client)/driver-registration/components/PhoneNumber';
import ProgressBar from '@/app/(client)/driver-registration/components/ProgressBar';

import { DriverRegistrationStep } from '@/app/(client)/driver-registration/constants';

const DriverRegistrationFunnel = () => {
  const [step, setStep] = useState(DriverRegistrationStep.CarImage);

  const handleNext = (value: DriverRegistrationStep) => {
    setStep(value);
  };

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
          <PhoneNumber />
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
