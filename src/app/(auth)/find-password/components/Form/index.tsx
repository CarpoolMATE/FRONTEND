'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';
import Button from '@/components/Button';

import usePostFindPassword from '@/app/(auth)/find-password/apis/usePostFindPassword';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import {
  FindPasswordFormValues,
  findPasswordSchema,
} from '@/app/(auth)/find-password/components/Form/schema';
import Modal from '@/components/Modal';

const FindPasswordForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FindPasswordFormValues>({
    resolver: zodResolver(findPasswordSchema),
  });

  const { mutateAsync: postFindPassword } = usePostFindPassword();

  const [errorText, setErrorText] = useState('');

  const handleFindPassword = useCallback(
    async ({ email, memberId }: FindPasswordFormValues) => {
      try {
        const response = await postFindPassword({ email, memberId });
        setErrorText(response.message);
      } catch (error) {
        if (error instanceof Error) {
          setErrorText(error.message);
        }
      }
    },
    [postFindPassword, setError, setErrorText],
  );

  return (
    <div className="w-full h-full">
      <Modal
        isOpen={!!errorText}
        message={errorText}
        onClose={() =>
          errorText === '이메일이 발송되었습니다.'
            ? router.push(CLIENT_APP_ROUTES.HOME)
            : setErrorText('')
        }
      />
      <form
        onSubmit={handleSubmit(handleFindPassword)}
        className="flex flex-col h-full justify-between"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-icon text-[14px]">아이디</h2>
            <Input
              placeholder="아이디를 입력해주세요"
              {...register('memberId')}
              error={!!errors.memberId || !!errors.email}
              errorText={errors.memberId?.message}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-icon text-[14px]">이메일</h2>
            <Input
              placeholder="이메일을 입력해주세요."
              {...register('email')}
              error={!!errors.email}
              errorText={errors.email?.message}
            />
          </div>
        </div>
        <Button disabled={!isValid} className="mb-0">
          비밀번호 찾기
        </Button>
      </form>
    </div>
  );
};

export default FindPasswordForm;
