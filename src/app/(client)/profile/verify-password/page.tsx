'use client';

import { useRouter } from 'next/navigation';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Input from '@/components/Input';
import Button from '@/components/Button';
import Header from '@/app/(auth)/components/Header';

const ProfileVerifyPasswordPage = () => {
  const router = useRouter();

  const onConfirmHandle = () => {
    //TODO: api 연동 후 라우팅 적용
    router.push(CLIENT_APP_ROUTES.CHANGE_PASSWORD);
  };

  return (
    <section className="w-full flex flex-col h-screen">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onConfirmHandle();
        }}
        className="flex h-full flex-col justify-between p-4 w-full mt-16"
      >
        <div className="w-full flex flex-col gap-2">
          <span className="text-sm">기존 비밀번호</span>
          <div className="flex gap-2 w-full [&>*]:w-full">
            <Input type="password" placeholder="기존 비밀번호를 입력해주세요" />
          </div>
        </div>
        <Button>확인</Button>
      </form>
    </section>
  );
};

export default ProfileVerifyPasswordPage;
