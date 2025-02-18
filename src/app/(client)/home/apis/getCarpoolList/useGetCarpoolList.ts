import { useQuery } from '@tanstack/react-query';

import { getCarpoolList } from '@/app/(client)/home/apis/getCarpoolList';

import { QueryKey } from '@/constants/keys';

const useGetCarpoolList = () =>
  useQuery({
    queryKey: [QueryKey.CarpoolList],
    queryFn: getCarpoolList,
  });

export default useGetCarpoolList;
