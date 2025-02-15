'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ERROR_CODE } from '@/constants/errorCode';

import Input from '@/components/Input';
import Button from '@/components/Button';

import usePostFindPassword from '@/app/(auth)/find-password/apis/usePostFindPassword';

import {
  FindPasswordFormValues,
  findPasswordSchema,
} from '@/app/(auth)/find-password/components/Form/schema';

const FindPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FindPasswordFormValues>({
    resolver: zodResolver(findPasswordSchema),
  });

  const { mutateAsync: postFindPassword } = usePostFindPassword();

  const handleFindPassword = useCallback(
    async ({ email, memberId }: FindPasswordFormValues) => {
      try {
        const response = await postFindPassword({ email, memberId });
        console.log(response);
      } catch (error) {
        if (error instanceof Error) {
          if (error.cause === ERROR_CODE['ACCOUNT-001']) {
            //TODO: 에러 분기점 처리
            setError('email', { type: 'validate', message: error.message });
          } else {
            //TODO: modal 적용
            alert(error.message);
          }
        }
      }
    },
    [postFindPassword, setError],
  );

  return (
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
  );
};

export default FindPasswordForm;
