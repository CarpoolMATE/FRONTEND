'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useLineLogin } from '@/app/api/auth/callback/line/apis';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { useModalStore } from '@/store/modal';

import Spin from '@/components/Spin';

const CallbackLine = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { mutate: lineLogin } = useLineLogin();
  const { openModal } = useModalStore();

  useEffect(() => {
    if (code) {
      lineLogin(code, {
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
  }, [code, router, lineLogin, openModal]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Spin />
    </div>
  );
};

export default CallbackLine;
