import { fetchDelete } from '@/apis/fetch';

import { DELETE_CARPOOL_ROUTE_CLASSES } from '@/app/(client)/reservation-detail/apis/deleteCarpool/constants';

import { ApiSuccessResponse } from '@/apis/types';
import { DeleteCarpoolType } from '@/app/(client)/reservation-detail/apis/deleteCarpool/types';

const deleteCarpool = async (type: DeleteCarpoolType) => {
  const response = await fetchDelete<ApiSuccessResponse<string>>(
    DELETE_CARPOOL_ROUTE_CLASSES[type],
  );

  return response;
};

export default deleteCarpool;
