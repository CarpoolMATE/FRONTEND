'use client';

import { ProgressBarProps } from '@/app/(client)/driver-registration/components/ProgressBar/types';

import { cn } from '@/utils/style';

const ProgressBar = ({ step }: ProgressBarProps) => {
  const baseClassName = 'flex-1 h-[5px] rounded-2xl';
  return (
    <div className="relative flex gap-x-3 mt-2 px-5">
      <div
        className={cn(
          baseClassName,
          step === 'CarNumber' || step === 'PhoneNumber'
            ? 'bg-primary'
            : 'bg-[#eaeaea]/95 ',
        )}
      />
      <div
        className={cn(
          baseClassName,
          step === 'PhoneNumber' ? 'bg-primary' : 'bg-[#eaeaea]/95 ',
        )}
      />
    </div>
  );
};

export default ProgressBar;
