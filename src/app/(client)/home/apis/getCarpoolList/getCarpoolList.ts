import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { ApiSuccessResponse } from '@/apis/types';
import { CarpoolDto } from '@/types/dtos/carpool';

const getCarpoolList = async () => {
  const response = await fetchGet<ApiSuccessResponse<CarpoolDto[]>>(
    API_ROUTES.CARPOOL.LIST,
  );

  return response.data;
};

export default getCarpoolList;
