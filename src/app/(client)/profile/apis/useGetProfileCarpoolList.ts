import { useQuery } from '@tanstack/react-query';

import getProfileCarpoorList from '@/app/(client)/profile/apis/getProfileCarpoolList';

import { QueryKey } from '@/constants/keys';

import { GetProfileListType } from '@/app/(client)/profile/apis/types';

const useGetProfileCarpoolList = (type: GetProfileListType) =>
  useQuery({
    queryKey: [QueryKey.ProfileCarpoolList, type],
    queryFn: () => getProfileCarpoorList(type),
  });

export default useGetProfileCarpoolList;
