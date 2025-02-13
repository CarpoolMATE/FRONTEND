import { useMutation } from '@tanstack/react-query';

import postSignIn from '@/app/(auth)/login/apis/postSignIn';

const usePostSignIn = () => {
  return useMutation({
    mutationFn: postSignIn,
  });
};

export default usePostSignIn;
