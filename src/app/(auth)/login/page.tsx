'use client';

import React from 'react';

import Logo from '@/app/(auth)/components/Logo';
import LoginForm from '@/app/(auth)/login/components/Form';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100%-64px)]">
      <Logo className="text-6xl mb-[82.82px]" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
