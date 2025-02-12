'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { APP_ROUTES } from '@/constants/routes';

import Input from '@/components/Input';
import Button from '@/components/Button';

const schema = z.object({
  id: z.string().min(1, { message: '아이디를 입력해주세요.' }),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
});

type FormValues = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const handleLogin = useCallback((data: FormValues) => {
    try {
      // await axiosInstance.post('/member/signIn', {
      //   memberId: id,
      //   password: password,
      // });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <form
      className=" flex-1 relative  flex flex-col"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="px-4">
        <section className="flex flex-col gap-4">
          <Input
            {...register('id')}
            placeholder="아이디"
            error={!!errors.id}
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
            href={APP_ROUTES.FIND_ID}
            className="cursor-pointer text-center text-[#aaaaaa] text-sm font-medium leading-[21px]"
          >
            아이디 찾기
          </Link>
          <div className="opacity-50 text-center text-[#aaaaaa] text-base font-normal leading-normal">
            |
          </div>
          <Link
            href={APP_ROUTES.FIND_PASSWORD}
            className="cursor-pointer text-center text-[#aaaaaa] text-sm font-medium leading-[21px]"
          >
            비밀번호 찾기
          </Link>
        </section>
      </div>

      <div className="mt-auto p-4">
        <Button disabled={!isValid} type="submit">
          로그인
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
