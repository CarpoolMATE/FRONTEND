const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_ROUTES = {
  MEMBER: {
    SIGN_UP: `${BASE_API_URL}/api/member/signUp`,
    SIGN_IN: `${BASE_API_URL}/api/member/login`,
  },
};

export const APP_ROUTES = {
  SIGNIN: '/sign-in',
  SIGNUP: '/sign-up',
  LOGIN: '/login',
  FIND_ID: '/find-id',
  FIND_PASSWORD: '/find-password',
  RESET_PASSWORD: '/reset-password',
};

export const APP_ROUTES_NAME: Record<string, string> = {
  [APP_ROUTES.SIGNIN]: '',
  [APP_ROUTES.LOGIN]: '',
  [APP_ROUTES.SIGNUP]: '회원가입',
  [APP_ROUTES.FIND_ID]: '아이디 찾기',
  [APP_ROUTES.FIND_PASSWORD]: '비밀번호 찾기',
  [APP_ROUTES.RESET_PASSWORD]: '비밀번호 재설정',
};
