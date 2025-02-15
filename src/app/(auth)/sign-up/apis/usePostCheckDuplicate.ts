import { useMutation } from '@tanstack/react-query';

import postCheckDuplicate from '@/app/(auth)/sign-up/apis/postCheckDuplicate';

import {
  PostCheckDuplicateParams,
  CheckDuplicate,
} from '@/app/(auth)/sign-up/apis/types';

const usePostCheckDuplicate = () => {
  return useMutation({
    mutationFn: ({
      params,
      type,
    }: {
      params: PostCheckDuplicateParams;
      type: CheckDuplicate;
    }) => postCheckDuplicate(params, type),
  });
};

export default usePostCheckDuplicate;
