'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import {
  VerifyPasswordFormValues,
  verifyPasswordSchema,
} from '@/app/(client)/profile/components/schema';

import usePostCheckDuplicate from '@/app/(auth)/sign-up/apis/usePostCheckDuplicate';

import Header from '@/app/(auth)/components/Header';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const ProfileVerifyPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<VerifyPasswordFormValues>({
    resolver: zodResolver(verifyPasswordSchema),
  });

  const router = useRouter();

  const { mutateAsync: postCheckDuplicateAPI } = usePostCheckDuplicate();

  const [errorText, setErrorText] = useState('');

  const onDuplicateHandle = async (values: VerifyPasswordFormValues) => {
    try {
      const response = await postCheckDuplicateAPI({
        params: { ...values },
        type: 'checkPassword',
      });

      if (response.data) {
        router.push(CLIENT_APP_ROUTES.CHANGE_PASSWORD);
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorText(error.message);
      }
    }
  };

  return (
    <section className="w-full flex flex-col h-screen">
      <Header />
      <Modal
        isOpen={!!errorText}
        message={errorText}
        onClose={() => setErrorText('')}
      />
      <form
        onSubmit={handleSubmit(onDuplicateHandle)}
        className="flex h-full flex-col justify-between p-4 w-full mt-16"
      >
        <div className="w-full flex flex-col gap-2">
          <span className="text-sm">기존 비밀번호</span>
          <div className="flex gap-2 w-full [&>*]:w-full">
            <Input
              {...register('password')}
              type="password"
              placeholder="기존 비밀번호를 입력해주세요"
            />
          </div>
        </div>
        <Button disabled={!isValid}>확인</Button>
      </form>
    </section>
  );
};

export default ProfileVerifyPasswordPage;
