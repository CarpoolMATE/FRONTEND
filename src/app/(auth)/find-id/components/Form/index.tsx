'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { CLIENT_APP_ROUTES } from '@/constants/routes';
import { ERROR_CODE } from '@/constants/errorCode';

import Input from '@/components/Input';
import Button from '@/components/Button';

import usePostFindId from '@/app/(auth)/find-id/apis/usePostFindId';

import {
  FindIdFormValues,
  findIdSchema,
} from '@/app/(auth)/find-id/components/Form/schema';

import Modal from '@/components/Modal';

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

  const [errorText, setErrorText] = useState('');

  const { mutateAsync: postFindId } = usePostFindId();

  const handleFindId = useCallback(
    async ({ email, nickname }: FindIdFormValues) => {
      try {
        const response = await postFindId({ email, nickname });
        router.push(
          CLIENT_APP_ROUTES.FIND_ID_RESULT +
            `?nickname=${nickname}&memberId=${response.data}`,
        );
      } catch (error) {
        if (error instanceof Error) {
          setErrorText(error.message);
        }
      }
    },
    [postFindId, router, setError, setErrorText],
  );

  return (
    <div className="w-full h-full">
      <Modal
        isOpen={!!errorText}
        message={errorText}
        onClose={() => setErrorText('')}
      />
      <form
        onSubmit={handleSubmit(handleFindId)}
        className="flex flex-col h-full justify-between"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-icon text-[14px]">닉네임</h2>
            <Input
              placeholder="닉네임을 입력해주세요"
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
    </div>
  );
};

export default FindIdForm;
