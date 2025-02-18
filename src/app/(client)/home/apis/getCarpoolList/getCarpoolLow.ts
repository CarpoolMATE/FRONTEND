import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { CarpoolDto } from '@/types/dtos/carpool';

const getCarpoolLow = async () => {
  const response = await fetchGet<CarpoolDto[]>(API_ROUTES.CARPOOL.LOW);

  return response;
};

export default getCarpoolLow;
