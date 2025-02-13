import { redirect } from 'next/navigation';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

// TODO: 유저 정보 확인해서 있으면 메인 아니면 로그인 페이지로 이동
export default function App() {
  redirect(CLIENT_APP_ROUTES.SIGNIN);
}
