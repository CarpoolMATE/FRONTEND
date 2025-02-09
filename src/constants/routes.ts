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
