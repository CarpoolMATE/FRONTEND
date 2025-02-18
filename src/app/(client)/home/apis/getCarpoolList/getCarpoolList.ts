import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { CarpoolDto } from '@/types/dtos/carpool';

const getCarpoolList = async () => {
  const response = await fetchGet<CarpoolDto[]>(API_ROUTES.CARPOOL.LIST);

  return response;
};

export default getCarpoolList;
