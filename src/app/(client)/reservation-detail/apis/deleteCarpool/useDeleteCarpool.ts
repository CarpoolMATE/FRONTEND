import { useMutation } from '@tanstack/react-query';

import deleteCarpool from '@/app/(client)/reservation-detail/apis/deleteCarpool/deleteCarpool';

import { DeleteCarpoolType } from '@/app/(client)/reservation-detail/apis/deleteCarpool/types';

const useDeleteCarpool = () => {
  return useMutation({
    mutationFn: ({ type }: { type: DeleteCarpoolType }) => deleteCarpool(type),
  });
};

export default useDeleteCarpool;
