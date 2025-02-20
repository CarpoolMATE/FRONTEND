'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Input from '@/components/Input';
import Button from '@/components/Button';

import usePostSignIn from '@/app/(auth)/login/apis/usePostSignIn';

import {
  LoginFormValues,
  loginSchema,
} from '@/app/(auth)/login/components/Form/schema';

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { mutateAsync: postSignIn } = usePostSignIn();

  const handleLogin = useCallback(
    async ({ id, password }: LoginFormValues) => {
      try {
        await postSignIn({
          memberId: id.trim(),
          password: password.trim(),
        });
        router.push(CLIENT_APP_ROUTES.HOME);
      } catch (error) {
        if (error instanceof Error) {
          //TODO: modal 적용
          alert(error.message);
        }
      }
    },
    [postSignIn, router, setError],
  );

  return (
    <form
      className=" flex-1 relative  flex flex-col"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="px-5">
        <section className="flex flex-col gap-4">
          <Input
            {...register('id')}
            placeholder="아이디"
            error={!!errors.id || !!errors.password}
            errorText={errors.id?.message}
          />

          <Input
            {...register('password')}
            type="password"
            placeholder="비밀번호"
            error={!!errors.password}
            errorText={errors.password?.message}
          />
        </section>

        <section className="inline-flex justify-center items-center gap-4 w-full mt-9">
          <Link
            href={CLIENT_APP_ROUTES.FIND_ID}
            className="cursor-pointer text-center text-[#aaaaaa] text-sm font-medium leading-[21px]"
          >
            아이디 찾기
          </Link>
          <div className="opacity-50 text-center text-[#aaaaaa] text-base font-normal leading-normal">
            |
          </div>
          <Link
            href={CLIENT_APP_ROUTES.FIND_PASSWORD}
            className="cursor-pointer text-center text-[#aaaaaa] text-sm font-medium leading-[21px]"
          >
            비밀번호 찾기
          </Link>
        </section>
      </div>

      <div className="mt-auto p-5">
        <Button disabled={!isValid} type="submit">
          로그인
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
