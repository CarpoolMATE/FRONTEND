import { useMutation } from '@tanstack/react-query';

import postFindPassword from '@/app/(auth)/find-password/apis/postFindPassword';

const usePostFindPassword = () => {
  return useMutation({
    mutationFn: postFindPassword,
  });
};

export default usePostFindPassword;
