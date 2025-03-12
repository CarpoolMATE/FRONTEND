'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useKakaoLogin } from '@/app/api/auth/callback/kakao/apis';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { useModalStore } from '@/store/modal';

import Spin from '@/components/Spin';

const CallbackKakao = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { openModal } = useModalStore();

  const { mutate: kakaoLogin } = useKakaoLogin();

  useEffect(() => {
    if (code) {
      kakaoLogin(code, {
        onSuccess: () => {
          router.replace(CLIENT_APP_ROUTES.HOME);
        },
        onError: (error) =>
          openModal({
            message: error.message,
            closeText: '확인',
          }),
      });
    }
  }, [code, router, kakaoLogin, openModal]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Spin />
    </div>
  );
};

export default CallbackKakao;
