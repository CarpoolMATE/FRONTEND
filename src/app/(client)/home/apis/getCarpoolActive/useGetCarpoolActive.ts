import { useQuery } from '@tanstack/react-query';

import { getCarpoolActive } from '@/app/(client)/home/apis/getCarpoolActive';

import { QueryKey } from '@/constants/keys';

const useGetCarpoolActive = () =>
  useQuery({
    queryKey: [QueryKey.CarpoolActive],
    queryFn: getCarpoolActive,
  });

export default useGetCarpoolActive;
