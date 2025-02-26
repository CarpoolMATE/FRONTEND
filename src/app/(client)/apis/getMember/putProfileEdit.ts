import { API_ROUTES } from '@/constants/routes';

import { fetchPut } from '@/apis/fetch';

import { PutProfileEditParams } from '@/app/(client)/apis/getMember/types';
import { ApiSuccessResponse } from '@/apis/types';

const putProfileEdit = async (params: PutProfileEditParams) => {
  const response = await fetchPut<
    ApiSuccessResponse<PutProfileEditParams>,
    PutProfileEditParams
  >(API_ROUTES.MEMBER.PASSINGER_PROFILE, params);

  return response;
};

export default putProfileEdit;
