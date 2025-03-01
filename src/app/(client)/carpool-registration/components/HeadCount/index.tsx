'use client';

import { useFormContext } from 'react-hook-form';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import { CarpoolRegistrationNextStepProps } from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/types';

import { CarpoolRegistrationFormValues } from '@/app/(client)/carpool-registration/components/Form/schema';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { Dropdown } from '@/components/DropDown';

const HeadCount = ({ onNext }: CarpoolRegistrationNextStepProps) => {
  const { register, watch, setValue } =
    useFormContext<CarpoolRegistrationFormValues>();

  return (
    <section
      className="flex flex-col w-full"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5 w-full">
        <h1 className="text-2xl font-bold pt-12 mb-12">
          탑승 인원을 입력해주세요
        </h1>

        {watch('capacity') && (
          <div className="mb-6 flex flex-col gap-2.5 w-full">
            <p className="text-icon text-sm font-medium">탑승 비용(1인 기준)</p>
            <div className="w-full">
              <Input
                {...register('cost')}
                placeholder="비용을 입력해주세요"
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/[^0-9]/g, '');
                  if (parseInt(target.value) < 1 || target.value === '') {
                    target.value = '1';
                  }
                }}
                type="number"
                min={1}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2.5 w-full">
          <p className="text-icon text-sm font-medium">탑승 인원</p>
          <div className="w-full">
            <Dropdown
              indexString="명"
              onChangeNumber={(v) => setValue('capacity', v)}
              selectValues={[1, 2, 3, 4]}
              value={watch('capacity')}
              placeHolder="선택"
            />
          </div>
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button
          disabled={!watch('capacity') || !watch('cost')}
          onClick={onNext}
        >
          다음
        </Button>
      </div>
    </section>
  );
};

export default HeadCount;
