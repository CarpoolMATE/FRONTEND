'use client';

import { useState } from 'react';

import { CarpoolRegistrationStep } from '@/app/(client)/carpool-registration/constants';

import ProgressBar from '@/app/(client)/carpool-registration/components/ProgressBar';
import StartLocation from '@/app/(client)/carpool-registration/components/StartLocation';
import StartTime from '@/app/(client)/carpool-registration/components/StartTime';
import ChatUrl from '@/app/(client)/carpool-registration/components/ChatUrl';
import Check from '@/app/(client)/carpool-registration/components/Check';
import HeadCount from '@/app/(client)/carpool-registration/components/HeadCount';

const CarpoolRegistrationFunnel = () => {
  const [step, setStep] = useState(CarpoolRegistrationStep.StartLocation);

  const handleNext = (value: CarpoolRegistrationStep) => {
    setStep(value);
  };

  switch (step) {
    case CarpoolRegistrationStep.StartLocation:
      return (
        <>
          <ProgressBar step={step} />
          <StartLocation
            onNext={() => handleNext(CarpoolRegistrationStep.StartTime)}
          />
        </>
      );
    case CarpoolRegistrationStep.StartTime:
      return (
        <>
          <ProgressBar step={step} />
          <StartTime
            onNext={() => handleNext(CarpoolRegistrationStep.ChatUrl)}
          />
        </>
      );
    case CarpoolRegistrationStep.ChatUrl:
      return (
        <>
          <ProgressBar step={step} />
          <ChatUrl
            onNext={() => handleNext(CarpoolRegistrationStep.HeadCount)}
          />
        </>
      );
    case CarpoolRegistrationStep.HeadCount:
      return (
        <>
          <ProgressBar step={step} />
          <HeadCount onNext={() => handleNext(CarpoolRegistrationStep.Check)} />
        </>
      );
    default:
      return (
        <>
          <ProgressBar step={step} />
          <Check />
        </>
      );
  }
};

export default CarpoolRegistrationFunnel;
