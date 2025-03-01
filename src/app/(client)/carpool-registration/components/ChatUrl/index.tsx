'use client';

import { useFormContext } from 'react-hook-form';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import { CarpoolRegistrationNextStepProps } from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/types';

import { CarpoolRegistrationFormValues } from '@/app/(client)/carpool-registration/components/Form/schema';

import Button from '@/components/Button';
import Input from '@/components/Input';

const ChatUrl = ({ onNext }: CarpoolRegistrationNextStepProps) => {
  const { register, watch, formState } =
    useFormContext<CarpoolRegistrationFormValues>();

  const error = formState.errors.departureCoordinate;

  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5">
        <h1 className="text-2xl font-bold pt-12">
          오픈 채팅방 주소를 입력해주세요
        </h1>

        <div className="mt-12 flex flex-col gap-2.5">
          <p className="text-icon text-sm font-medium">오픈 채팅방 주소</p>

          <Input
            {...register('chatLink')}
            placeholder="링크를 붙여넣기해주세요"
            error={!!error}
            errorText={error?.message}
          />
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button disabled={!watch('chatLink')} onClick={onNext}>
          다음
        </Button>
      </div>
    </section>
  );
};

export default ChatUrl;
