import { fetchGet } from '@/apis/fetch';

import { CHECK_GETPROFILE_LIST_ROUTE_CLASSES } from '@/app/(client)/profile/apis/constants';

import { GetProfileListType } from '@/app/(client)/profile/apis/types';
import { ApiSuccessResponse } from '@/apis/types';
import { CarpoolDto } from '@/types/dtos/carpool';

const getProfileCarpoorList = async (type: GetProfileListType) => {
  const response = await fetchGet<ApiSuccessResponse<CarpoolDto[]>>(
    CHECK_GETPROFILE_LIST_ROUTE_CLASSES[type],
  );

  return response;
};

export default getProfileCarpoorList;
