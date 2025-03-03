import {
  DELETE_CARPOOL_FETCH_CALSSES,
  DELETE_CARPOOL_ROUTE_CLASSES,
} from '@/app/(client)/reservation-detail/apis/deleteCarpool/constants';

import { DeleteCarpoolType } from '@/app/(client)/reservation-detail/apis/deleteCarpool/types';
import { ApiSuccessResponse } from '@/apis/types';

const deleteCarpool = async (type: DeleteCarpoolType) => {
  const response = await DELETE_CARPOOL_FETCH_CALSSES[type]<
    ApiSuccessResponse<string>
  >(DELETE_CARPOOL_ROUTE_CLASSES[type]);

  return response;
};

export default deleteCarpool;
