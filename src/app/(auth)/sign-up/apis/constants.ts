import { API_ROUTES } from '@/constants/routes';

import { CheckDuplicate } from '@/app/(auth)/sign-up/apis/types';

export const CHECK_DUPLICATE_ROUTE_CLASSES: Record<CheckDuplicate, string> = {
  checkEmail: API_ROUTES.MEMBER.CHECK_EMAIL,
  checkMemberId: API_ROUTES.MEMBER.CHECK_MEMBERID,
  checkNickname: API_ROUTES.MEMBER.CHECK_NICKNAME,
  checkPassword: API_ROUTES.MEMBER.CHECK_PASSWORD,
};
