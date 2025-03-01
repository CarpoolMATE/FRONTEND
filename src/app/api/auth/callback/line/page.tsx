'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useLineLogin } from '@/app/api/auth/callback/line/apis';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import Spin from '@/components/Spin';

const CallbackLine = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { mutate: lineLogin } = useLineLogin();

  useEffect(() => {
    if (code) {
      lineLogin(code, {
        onSuccess: () => {
          router.replace(CLIENT_APP_ROUTES.HOME);
        },
        onError: (error) => alert(error.message),
      });
    }
  }, [code, router, lineLogin]);

  return (
    <div className="h-screen flex items-center justify-center">
      <Spin />
    </div>
  );
};

export default CallbackLine;
