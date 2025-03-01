'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useKakaoLogin } from '@/app/api/auth/callback/kakao/apis';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Spin from '@/components/Spin';

const CallbackKakao = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { mutate: kakaoLogin } = useKakaoLogin();

  useEffect(() => {
    if (code) {
      kakaoLogin(code, {
        onSuccess: () => {
          router.replace(CLIENT_APP_ROUTES.HOME);
        },
        onError: (error) => alert(error.message),
      });
    }
  }, [code, router, kakaoLogin]);

  return (
    <div className="h-screen flex items-center justify-center">
      <Spin />
    </div>
  );
};

export default CallbackKakao;
