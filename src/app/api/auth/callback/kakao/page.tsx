import { redirect } from 'next/navigation';

import getSocialKakao from '@/app/api/auth/callback/kakao/getSocialKakao';
import { CLIENT_APP_ROUTES } from '@/constants/routes';

type CallbackKakaoProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const CallbackKakao = async ({ searchParams }: CallbackKakaoProps) => {
  const code = (await searchParams).code as string;

  try {
    await getSocialKakao(code);
    redirect(CLIENT_APP_ROUTES.HOME);
  } catch (error) {
    console.error(error);
  }
  return <div>{code}</div>;
};

export default CallbackKakao;
