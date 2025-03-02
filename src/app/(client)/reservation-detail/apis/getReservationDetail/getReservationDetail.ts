import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { GetCarpoolDetailDto } from '@/app/(client)/reservation-detail/apis/getReservationDetail/types';
import { ApiSuccessResponse } from '@/apis/types';

const getReservationDetail = async () => {
  const response = await fetchGet<ApiSuccessResponse<GetCarpoolDetailDto>>(
    API_ROUTES.CARPOOL.DETAIL,
  );
  return response.data;
};

export default getReservationDetail;
