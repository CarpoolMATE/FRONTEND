import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { ApiSuccessResponse } from '@/apis/types';
import { CarpoolDto } from '@/types/dtos/carpool';

const getCarpoolLow = async () => {
  const response = await fetchGet<ApiSuccessResponse<CarpoolDto[]>>(
    API_ROUTES.CARPOOL.LOW,
  );

  return response.data;
};

export default getCarpoolLow;
