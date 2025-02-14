import { useMutation } from '@tanstack/react-query';

import postFindId from '@/app/(auth)/find-id/apis/postFindId';

const usePostFindId = () => {
  return useMutation({
    mutationFn: postFindId,
  });
};

export default usePostFindId;
