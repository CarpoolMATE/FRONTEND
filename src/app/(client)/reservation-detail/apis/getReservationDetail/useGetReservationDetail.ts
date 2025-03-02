import { useQuery } from '@tanstack/react-query';

import getReservationDetail from '@/app/(client)/reservation-detail/apis/getReservationDetail/getReservationDetail';

import { QueryKey } from '@/constants/keys';

const useGetReservationDetail = () =>
  useQuery({
    queryKey: [QueryKey.ReservationDetail],
    queryFn: getReservationDetail,
  });

export default useGetReservationDetail;
