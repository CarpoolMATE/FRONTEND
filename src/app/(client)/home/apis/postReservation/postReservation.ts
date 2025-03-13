import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { PostReservationParams } from '@/app/(client)/home/apis/postReservation/types';
import { ApiSuccessResponse } from '@/apis/types';

const postReservation = async (params: PostReservationParams) => {
  const response = await fetchPost<ApiSuccessResponse<number>>(
    API_ROUTES.CARPOOL.RESERVATION,
    params,
  );

  return response.data;
};

export default postReservation;
