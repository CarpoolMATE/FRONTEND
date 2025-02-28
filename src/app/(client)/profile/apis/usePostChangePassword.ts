import { useMutation } from '@tanstack/react-query';

import postChangePassword from '@/app/(client)/profile/apis/postChangePassword';

const usePostChangePassword = () => {
  return useMutation({
    mutationFn: postChangePassword,
  });
};

export default usePostChangePassword;
