import { API_ROUTES } from '@/constants/routes';

import { fetchPut } from '@/apis/fetch';

import { ApiSuccessResponse } from '@/apis/types';
import { PutProfileEditParams } from '@/app/(client)/profile/apis/types';

const putProfileEdit = async (params: PutProfileEditParams) => {
  const response = await fetchPut<
    ApiSuccessResponse<PutProfileEditParams>,
    PutProfileEditParams
  >(API_ROUTES.MEMBER.PASSINGER_PROFILE, params);

  return response;
};

export default putProfileEdit;
