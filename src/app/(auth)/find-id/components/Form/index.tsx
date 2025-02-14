'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';
import Button from '@/components/Button';

import usePostFindId from '@/app/(auth)/find-id/apis/usePostSignIn';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

import {
  FindIdFormValues,
  findIdSchema,
} from '@/app/(auth)/find-id/components/Form/schema';

const FindIdForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FindIdFormValues>({
    resolver: zodResolver(findIdSchema),
  });

  const { mutateAsync: postFindId } = usePostFindId();

  const handleFindId = useCallback(
    async ({ email, nickname }: FindIdFormValues) => {
      try {
        const response = await postFindId({ email, nickname });
        // TODO: 라우터 밀어주기 확인
        router.push(
          CLIENT_APP_ROUTES.FIND_ID +
            `/result?nickname=dwadwadwa11&memberId=${response}`,
        );
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.name);
          // TODO: 에러코드 분기점 처리
          // if (error.cause === ERROR_CODE['ACCOUNT-004']) {
          //   setError('password', { type: 'validate', message: error.message });
          // } else {
          //   alert(error.message);
          // }
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
          <h2 className="text-[#505050] text-[14px]">닉네임</h2>
          <Input
            placeholder="이름을 입력해주세요"
            {...register('nickname')}
            error={!!errors.nickname || !!errors.email}
            errorText={errors.nickname?.message}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-[#505050] text-[14px]">이메일</h2>
          <Input
            placeholder="이메일을 입력해주세요."
            {...register('email')}
            error={!!errors.email}
            errorText={errors.email?.message}
          />
        </div>
      </div>
      <Button className="mb-0">아이디 찾기</Button>
    </form>
  );
};

export default FindIdForm;
