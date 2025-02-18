import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { CarpoolDto } from '@/types/dtos/carpool';

const getCarpoolFast = async () => {
  const response = await fetchGet<CarpoolDto[]>(API_ROUTES.CARPOOL.FAST);

  return response;
};

export default getCarpoolFast;
