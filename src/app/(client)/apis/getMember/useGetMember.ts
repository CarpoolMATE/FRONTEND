import { useQuery } from '@tanstack/react-query';

import getMember from '@/app/(client)/apis/getMember/getMember';

import { QueryKey } from '@/constants/keys';

const useGetMember = () =>
  useQuery({
    queryKey: [QueryKey.Member],
    queryFn: getMember,
  });

export default useGetMember;
