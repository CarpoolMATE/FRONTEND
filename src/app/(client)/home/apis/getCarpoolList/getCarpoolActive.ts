import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { ApiSuccessResponse } from '@/apis/types';
import { CarpoolDto } from '@/types/dtos/carpool';

const getCarpoolActive = async () => {
  const response = await fetchGet<ApiSuccessResponse<CarpoolDto[]>>(
    API_ROUTES.CARPOOL.ACTIVE,
  );

  return response.data;
};

export default getCarpoolActive;
