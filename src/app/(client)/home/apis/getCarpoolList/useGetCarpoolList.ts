import { useQuery } from '@tanstack/react-query';

import { QueryKey } from '@/constants/keys';
import { CARPOOL_APIS } from '@/app/(client)/home/apis/getCarpoolList/constants';

import { GetCarpoolListParams } from '@/app/(client)/home/apis/getCarpoolList/types';

const useGetCarpoolList = ({ type }: GetCarpoolListParams) =>
  useQuery({
    queryKey: [QueryKey.CarpoolList],
    queryFn: () => CARPOOL_APIS[type],
  });

export default useGetCarpoolList;
