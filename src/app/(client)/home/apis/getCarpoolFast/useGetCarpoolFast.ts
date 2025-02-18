import { useQuery } from '@tanstack/react-query';

import { getCarpoolFast } from '@/app/(client)/home/apis/getCarpoolFast';

import { QueryKey } from '@/constants/keys';

const useGetCarpoolFast = () =>
  useQuery({
    queryKey: [QueryKey.CarpoolList, 'fast'],
    queryFn: getCarpoolFast,
  });

export default useGetCarpoolFast;
