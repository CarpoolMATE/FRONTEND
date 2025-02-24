'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Logo from '@/app/(auth)/components/Logo';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

const SignInPage = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col justify-center items-center h-full">
      <Logo />
      <p className="text-center text-[#aaaaaa] text-xl font-appleSD leading-[30px] mb-[111px]">
        우리들의 출퇴근 메이트
      </p>

      <div className="flex-col justify-start items-center gap-[30px] inline-flex px-5 w-full max-w-[375px]">
        <div className="self-stretch h-[187px] flex-col justify-start items-start gap-2 flex">
          <Button className="flex items-center px-5 bg-[#fee500]">
            <Icon icon="KAKAO" className="text-black size-[22px]" />

            <span className="grow shrink basis-0 text-center text-black/85 text-lg font-semibold">
              카카오로 계속하기
            </span>
          </Button>

          <Button className="flex items-center px-5 bg-[#00B900]">
            <Icon icon="LINE" className="size-[22px]" />

            <span className="grow shrink basis-0 text-center text-white text-lg font-semibold">
              라인으로 계속하기
            </span>
          </Button>

          <Link href={CLIENT_APP_ROUTES.LOGIN} className="w-full">
            <Button className="flex items-center px-5">
              <Icon icon="PERSON" className="text-white size-[22px]" />

              <span className="grow shrink basis-0 text-center text-white text-lg font-semibold">
                아이디로 로그인
              </span>
            </Button>
          </Link>
        </div>
        <div className="justify-start items-center gap-3 inline-flex">
          <div className="text-center text-[#aaaaaa] text-base font-medium font-pretendard leading-normal">
            <span className="mr-[10px]">메이트 회원이 아니신가요?</span>
            <span
              onClick={() => {
                router.push(CLIENT_APP_ROUTES.SIGNUP);
              }}
              className="cursor-pointer font-bold underline"
            >
              회원가입
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
