'use client';

import Input from '@/components/Input';
import Button from '@/components/Button';
import Header from '@/app/(auth)/components/Header';

const ProfileChangePasswordPage = () => {
  return (
    <section className="w-full flex flex-col h-screen">
      <Header />
      <form className="flex h-full flex-col justify-between p-4 w-full mt-16">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full flex flex-col gap-2">
            <span className="text-sm">비밀번호</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input type="password" placeholder="비밀번호를 입력해주세요" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-sm">비밀번호 확인</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input
                type="password"
                placeholder="비밀번호를 재입력 해주세요."
              />
            </div>
          </div>
        </div>
        <Button>확인</Button>
      </form>
    </section>
  );
};

export default ProfileChangePasswordPage;
