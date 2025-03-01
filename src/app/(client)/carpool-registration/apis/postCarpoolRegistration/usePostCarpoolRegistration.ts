import { useMutation } from '@tanstack/react-query';

import postCarpoolRegistration from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/postCarpoolRegistration';

import { PostCarpoolRegistrationParams } from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/types';

const usePostCarpoolRegistration = () =>
  useMutation({
    mutationFn: (params: PostCarpoolRegistrationParams) =>
      postCarpoolRegistration(params),
  });

export default usePostCarpoolRegistration;
export type { PostCarpoolRegistrationParams };
