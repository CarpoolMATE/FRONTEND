import { useMutation } from '@tanstack/react-query';

import postSignUp from '@/app/(auth)/sign-up/apis/postSignUp';

const usePostSignUp = () => {
  return useMutation({
    mutationFn: postSignUp,
  });
};

export default usePostSignUp;
