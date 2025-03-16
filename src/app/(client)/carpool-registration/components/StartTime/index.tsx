'use client';

import { useFormContext } from 'react-hook-form';
import { ko } from 'date-fns/locale';
import { addDays, format } from 'date-fns';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import { CarpoolRegistrationNextStepProps } from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/types';

import { CarpoolRegistrationFormValues } from '@/app/(client)/carpool-registration/components/Form/schema';

import { Dropdown } from '@/components/DropDown';
import Button from '@/components/Button';
import Input from '@/components/Input';

const StartTime = ({ onNext }: CarpoolRegistrationNextStepProps) => {
  const { watch, setValue } = useFormContext<CarpoolRegistrationFormValues>();

  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5">
        <h1 className="text-2xl font-bold pt-12">출발 시간을 설정해주세요</h1>

        <div className="mt-12 flex flex-col gap-2.5">
          <p className="text-icon text-sm font-medium">출발 날짜</p>

          <Input
            readOnly
            defaultValue={format(addDays(new Date(), 1), 'MM월 dd일', {
              locale: ko,
            })}
          />
        </div>
        <div className="mt-3 flex flex-col gap-2.5">
          <p className="text-icon text-sm font-medium">출발 시간</p>

          <div className="flex gap-3">
            <Dropdown
              indexString="시"
              onChangeNumber={(v) => setValue('startTime', v)}
              selectValues={[7, 8]}
              value={watch('startTime')}
            />
            <Dropdown
              indexString="분"
              placeHolder="분"
              onChangeNumber={(v) => setValue('startMinute', v)}
              selectValues={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]}
              value={watch('startMinute')}
            />
          </div>
          <span className="text-placeholder text-sm">
            여객자동차 운수사업법 제81조 1항에 따라 유료 카풀의 경우 오전
            07:00-09:00 사이에 운행이 가능해요. 09:00 이후에는 운행이 종료돼야
            해요. (휴일, 공휴일은 유료 카풀 불가)
          </span>
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button
          disabled={
            (!watch('startTime') || !watch('startMinute')) &&
            watch('startMinute') !== 0
          }
          onClick={onNext}
        >
          다음
        </Button>
      </div>
    </section>
  );
};

export default StartTime;
