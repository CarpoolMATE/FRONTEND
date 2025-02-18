import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { CarpoolDto } from '@/types/dtos/carpool';

const getCarpoolActive = async () => {
  const response = await fetchGet<CarpoolDto[]>(API_ROUTES.CARPOOL.ACTIVE);

  return response;
};

export default getCarpoolActive;
