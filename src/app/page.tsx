'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Spin from '@/components/Spin';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { useMemberStore } from '@/store/member';

export default function App() {
  const router = useRouter();
  const { member } = useMemberStore();

  useEffect(() => {
    if (member) {
      router.push(CLIENT_APP_ROUTES.HOME);
    } else {
      router.push(CLIENT_APP_ROUTES.SIGNIN);
    }
  }, [member, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Spin />
    </div>
  );
}
