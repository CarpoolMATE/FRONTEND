'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { CLIENT_APP_ROUTES } from '@/constants/routes';
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '@/app/(client)/profile/apis/constants';

import usePostChangePassword from '@/app/(client)/profile/apis/usePostChangePassword';

import {
  ChangePasswordFormValues,
  changePasswordSchema,
} from '@/app/(client)/profile/components/schema';

import Header from '@/app/(auth)/components/Header';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Icon from '@/components/Icon';

const ProfileChangePasswordPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
  });

  const { mutateAsync: postChangePassword } = usePostChangePassword();

  const [errorText, setErrorText] = useState('');
  const [done, setDone] = useState(false);

  const onCloseModalHandle = () => {
    if (done) {
      router.push(CLIENT_APP_ROUTES.PROFILE);
    } else {
      setErrorText('');
    }
  };

  const onSubmitHandle = useCallback(
    async ({ password }: ChangePasswordFormValues) => {
      try {
        const response = await postChangePassword({ password });

        if (response.data) {
          setErrorText(response.message);
          setDone(true);
        }
      } catch (error) {
        if (error instanceof Error) {
          setErrorText(error.message);
        }
      }
    },
    [watch],
  );

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;

  const isPasswordLengthError = !(
    PASSWORD_MIN_LENGTH < watch('password')?.length &&
    watch('password').length < PASSWORD_MAX_LENGTH
  );

  const isPasswordFormatError = !passwordRegex.test(watch('password'));

  return (
    <section className="w-full flex flex-col h-screen">
      <Header />
      <Modal
        isOpen={!!errorText}
        message={errorText}
        onClose={onCloseModalHandle}
      />
      <form
        onSubmit={handleSubmit(onSubmitHandle)}
        className="flex h-full flex-col justify-between p-4 w-full mt-16"
      >
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full flex flex-col gap-2 relative">
            <span className="text-sm">비밀번호</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input
                {...register('password')}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                error={
                  (isPasswordLengthError || isPasswordFormatError) &&
                  !!watch('password')
                }
              />
            </div>
            <div className="absolute bottom-[-30px] left-[10px] flex gap-8 text-sm">
              <div
                className={`flex gap-2 items-center ${!watch('password') ? 'text-placeholder' : isPasswordLengthError ? 'text-error' : 'text-default'}`}
              >
                <Icon
                  className={`w-[12px] h-2 ${!watch('password') ? 'text-placeholder' : isPasswordLengthError ? 'text-error' : 'text-primary'}`}
                  icon={
                    watch('password') && isPasswordLengthError
                      ? 'ERROR'
                      : 'CHECK'
                  }
                />
                <span>3~20자 이내</span>
              </div>
              <div
                className={`flex gap-2 items-center ${!watch('password') ? 'text-placeholder' : isPasswordFormatError ? 'text-error' : 'text-default'}`}
              >
                <Icon
                  className={`w-[12px] h-2 ${!watch('password') ? 'text-placeholder' : isPasswordFormatError ? 'text-error' : 'text-primary'}`}
                  icon={
                    watch('password') && isPasswordFormatError
                      ? 'ERROR'
                      : 'CHECK'
                  }
                />
                <span>영문, 숫자 조합</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-sm">비밀번호 확인</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input
                {...register('newPassword')}
                type="password"
                placeholder="비밀번호를 재입력 해주세요."
                error={!!errors.newPassword}
                errorText={errors.newPassword?.message}
              />
            </div>
          </div>
        </div>
        <Button>확인</Button>
      </form>
    </section>
  );
};

export default ProfileChangePasswordPage;
