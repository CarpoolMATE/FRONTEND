import { fetchGet } from '@/apis/fetch';

import { CHECK_GETPROFILE_LIST_ROUTE_CLASSES } from '@/app/(client)/profile/apis/constants';

import {
  GetProfileCarpoolListDto,
  GetProfileListType,
} from '@/app/(client)/profile/apis/types';
import { ApiSuccessResponse } from '@/apis/types';

const getProfileCarpoorList = async (type: GetProfileListType) => {
  const response = await fetchGet<
    ApiSuccessResponse<GetProfileCarpoolListDto[]>
  >(CHECK_GETPROFILE_LIST_ROUTE_CLASSES[type]);

  return response;
};

export default getProfileCarpoorList;
