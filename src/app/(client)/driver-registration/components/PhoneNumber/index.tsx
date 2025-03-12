'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { useMemberStore } from '@/store/member';

import { usePostMemberDriver } from '@/app/(client)/driver-registration/apis/postMemberDriver';
import usePostUpload from '@/apis/usePostUpload';

import Button from '@/components/Button';
import Input from '@/components/Input';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { DriverRegistrationFormValues } from '@/app/(client)/driver-registration/components/Form/schema';
import { useModalStore } from '@/store/modal';

const PhoneNumber = () => {
  const router = useRouter();
  const { setMember } = useMemberStore();
  const { openModal } = useModalStore();

  const { register, watch, formState, trigger, handleSubmit } =
    useFormContext<DriverRegistrationFormValues>();

  const { mutateAsync: postMemberDriver } = usePostMemberDriver();
  const { mutateAsync: postUpload } = usePostUpload();

  const phoneNumber = watch('phoneNumber');
  const error = formState.errors.phoneNumber;

  const handleUploadFile = useCallback(
    async (file: File) => {
      try {
        const formData = new FormData();
        formData.append('file', file);
        return await postUpload(formData);
      } catch (error) {
        throw error;
      }
    },
    [postUpload],
  );

  const handleDriverRegistration = useCallback(
    async (values: DriverRegistrationFormValues) => {
      const { carImage, ...rest } = values;

      const imageUrl = await handleUploadFile(carImage);

      try {
        const member = await postMemberDriver({
          carImage: imageUrl,
          ...rest,
        });

        setMember(member);

        router.push(CLIENT_APP_ROUTES.DRIVER_REGISTRATION_DONE);
      } catch (error) {
        if (error instanceof Error) {
          openModal({
            message: error.message,
            closeText: '확인',
          });
        }
      }
    },
    [handleUploadFile, postMemberDriver, setMember, openModal, router],
  );

  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5">
        <h1 className="text-2xl font-bold pt-12">
          연락을 받을 수 있는
          <br />
          전화번호를 입력해주세요
        </h1>

        <div className="mt-12 flex flex-col gap-2.5">
          <p className="text-icon text-sm font-medium">전화번호</p>

          <Input
            {...register('phoneNumber')}
            placeholder="'-'없이 11자리를 입력해주세요."
            error={!!error}
            errorText={error?.message}
            onBlur={() => trigger('phoneNumber')}
          />
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button
          disabled={!phoneNumber || !!error}
          onClick={handleSubmit(handleDriverRegistration)}
        >
          드라이버 등록하기
        </Button>
      </div>
    </section>
  );
};

export default PhoneNumber;
