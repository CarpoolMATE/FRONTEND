import { useQuery } from '@tanstack/react-query';

import { getCarpoolLow } from '@/app/(client)/home/apis/getCarpoolLow';

import { QueryKey } from '@/constants/keys';

const useGetCarpoolLow = () =>
  useQuery({
    queryKey: [QueryKey.CarpoolList, 'low'],
    queryFn: getCarpoolLow,
  });

export default useGetCarpoolLow;
