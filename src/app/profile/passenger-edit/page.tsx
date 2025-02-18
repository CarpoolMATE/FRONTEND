'use client';

import Link from 'next/link';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Input from '@/components/Input';
import Button from '@/components/Button';
import Header from '@/app/(auth)/components/Header';
import ProfileImageCard from '@/app/profile/components/ProfileImage';

const PassengerProfileEditPage = () => {
  return (
    <section className="w-full flex flex-col h-screen">
      <Header />
      <form className="flex h-full flex-col justify-between p-4 w-full">
        <div className="w-full flex flex-col items-center gap-[30px]">
          <ProfileImageCard src="" isEdit={true} />
          <div className="w-full flex flex-col gap-2">
            <span className="text-sm">닉네임</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input placeholder="닉네임을 입력해주세요." />
              <Button className="max-w-20">중복확인</Button>
            </div>
          </div>
          <div className="w-full flex items-start">
            <Link
              href={CLIENT_APP_ROUTES.VERIFY_PASSWORD}
              className="text-placeholder cursor-pointer"
            >
              비밀번호 변경
            </Link>
          </div>
        </div>
        <Button>수정하기</Button>
      </form>
    </section>
  );
};

export default PassengerProfileEditPage;
