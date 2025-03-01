'use client';

import { CarpoolRegistrationStep } from '@/app/(client)/carpool-registration/constants';

import { CarpoolProgressBarProps } from '@/app/(client)/carpool-registration/components/ProgressBar/types';

import { cn } from '@/utils/style';

const CarpoolProgressBar = ({ step }: CarpoolProgressBarProps) => {
  const baseClassName = 'flex-1 h-[5px] rounded-2xl';
  return (
    <div className="relative flex gap-x-3 mt-2 px-5">
      <div
        className={cn(
          baseClassName,
          step === CarpoolRegistrationStep.StartLocation
            ? 'bg-[#eaeaea]/95 '
            : 'bg-primary',
        )}
      />
      <div
        className={cn(
          baseClassName,
          step === CarpoolRegistrationStep.StartLocation ||
            step === CarpoolRegistrationStep.StartTime
            ? 'bg-[#eaeaea]/95 '
            : 'bg-primary',
        )}
      />
      <div
        className={cn(
          baseClassName,
          step === CarpoolRegistrationStep.HeadCount ||
            step === CarpoolRegistrationStep.Check
            ? 'bg-primary'
            : 'bg-[#eaeaea]/95 ',
        )}
      />
    </div>
  );
};

export default CarpoolProgressBar;
