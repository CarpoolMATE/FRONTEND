'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { CLIENT_APP_ROUTES } from '@/constants/routes';
import { ERROR_CODE } from '@/constants/errorCode';

import Input from '@/components/Input';
import Button from '@/components/Button';

import usePostFindId from '@/app/(auth)/find-id/apis/usePostSignIn';

import {
  FindIdFormValues,
  findIdSchema,
} from '@/app/(auth)/find-id/components/Form/schema';

const FindIdForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FindIdFormValues>({
    resolver: zodResolver(findIdSchema),
  });

  const { mutateAsync: postFindId } = usePostFindId();

  const handleFindId = useCallback(
    async ({ email, nickname }: FindIdFormValues) => {
      try {
        const response = await postFindId({ email, nickname });
        router.push(
          CLIENT_APP_ROUTES.FIND_ID_RESULT +
            `?nickname=${nickname}&memberId=${response.memberId}`,
        );
      } catch (error) {
        if (error instanceof Error) {
          if (error.cause === ERROR_CODE['ACCOUNT-001']) {
            setError('email', { type: 'validate', message: error.message });
          } else if (error.cause === ERROR_CODE['ACCOUNT-008']) {
            setError('nickname', { type: 'validate', message: error.message });
          } else {
            //TODO: modal 적용
            alert(error.message);
          }
        }
      }
    },
    [postFindId, router, setError],
  );

  return (
    <form
      onSubmit={handleSubmit(handleFindId)}
      className="flex flex-col h-full justify-between"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-icon text-[14px]">닉네임</h2>
          <Input
            placeholder="이름을 입력해주세요"
            {...register('nickname')}
            error={!!errors.nickname || !!errors.email}
            errorText={errors.nickname?.message}
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
        아이디 찾기
      </Button>
    </form>
  );
};

export default FindIdForm;
