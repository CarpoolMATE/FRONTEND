import { API_ROUTES } from '@/constants/routes';

import { GetProfileListType } from '@/app/(client)/profile/apis/types';

export const CHECK_GETPROFILE_LIST_ROUTE_CLASSES: Record<
  GetProfileListType,
  string
> = {
  history: API_ROUTES.CARPOOL.HISTORY,
  driveHis: API_ROUTES.CARPOOL.DRIVE_HISTORY,
};

export const PASSWORD_MIN_LENGTH = 3;
export const PASSWORD_MAX_LENGTH = 19;
