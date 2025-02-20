'use client';

import { useFormContext } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';

import { CarNumberProps } from '@/app/(client)/driver-registration/components/CarNumber/types';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import { DriverRegistrationFormValues } from '@/app/(client)/driver-registration/components/Form/schema';

const CarNumber = ({ onNext }: CarNumberProps) => {
  const { register, watch, formState, trigger } =
    useFormContext<DriverRegistrationFormValues>();

  const carNumber = watch('carNumber');
  const error = formState.errors.carNumber;

  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5">
        <h1 className="text-2xl font-bold pt-12">
          카풀 차량의
          <br />
          번호를 입력해주세요
        </h1>

        <div className="mt-12 flex flex-col gap-2.5">
          <p className="text-icon text-sm font-medium">차량 번호</p>

          <Input
            {...register('carNumber')}
            placeholder="띄어쓰기 없이 입력해주세요"
            error={!!error}
            errorText={error?.message}
            onBlur={() => trigger('carNumber')}
          />
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button disabled={!carNumber || !!error} onClick={onNext}>
          다음
        </Button>
      </div>
    </section>
  );
};

export default CarNumber;
