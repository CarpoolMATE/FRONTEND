import { API_ROUTES } from '@/constants/routes';

import { fetchPut } from '@/apis/fetch';

import { ApiSuccessResponse } from '@/apis/types';
import { PutDriverProfileEditParams } from '@/app/(client)/profile/apis/types';

const putDriverProfileEdit = async (params: PutDriverProfileEditParams) => {
  const response = await fetchPut<
    ApiSuccessResponse<PutDriverProfileEditParams>,
    PutDriverProfileEditParams
  >(API_ROUTES.MEMBER.DRIVER, params);

  return response;
};

export default putDriverProfileEdit;
