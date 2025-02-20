import { useMutation } from '@tanstack/react-query';

import postMemberDriver from '@/app/(client)/driver-registration/apis/postMemberDriver/postMemberDriver';
import { PostMemberDriverRegistrationParams } from '@/app/(client)/driver-registration/apis/postMemberDriver/types';

const usePostMemberDriver = () =>
  useMutation({
    mutationFn: (params: PostMemberDriverRegistrationParams) =>
      postMemberDriver(params),
  });

export default usePostMemberDriver;
export type { PostMemberDriverRegistrationParams };
