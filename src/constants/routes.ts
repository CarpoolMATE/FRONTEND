const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_ROUTES = {
  MEMBER: {
    SIGN_UP: `${BASE_API_URL}/api/member/signUp`,
    SIGN_IN: `${BASE_API_URL}/api/member/signIn`,
    FIND_ID: `${BASE_API_URL}/api/member/findMemberId`,
    FIND_PASSWORD: `${BASE_API_URL}/api/member/findPassword`,
  },
  FIND: {
    FIND_ID: `${BASE_API_URL}/api/member/findMemberId`,
    FIND_PASSWORD: `${BASE_API_URL}/api/member/findPassword`,
  },
};

export const CLIENT_APP_ROUTES = {
  SIGNIN: '/sign-in',
  SIGNUP: '/sign-up',
  LOGIN: '/login',
  FIND_ID: '/find-id',
  FIND_ID_RESULT: '/find-id/result',
  FIND_PASSWORD: '/find-password',
  RESET_PASSWORD: '/reset-password',
  HOME: '/home',
};

export const CLIENT_APP_ROUTES_NAME: Record<string, string> = {
  [CLIENT_APP_ROUTES.SIGNIN]: '',
  [CLIENT_APP_ROUTES.LOGIN]: '',
  [CLIENT_APP_ROUTES.SIGNUP]: '회원가입',
  [CLIENT_APP_ROUTES.FIND_ID]: '아이디 찾기',
  [CLIENT_APP_ROUTES.FIND_ID_RESULT]: '아이디 찾기',
  [CLIENT_APP_ROUTES.FIND_PASSWORD]: '비밀번호 찾기',
  [CLIENT_APP_ROUTES.RESET_PASSWORD]: '비밀번호 재설정',
};
