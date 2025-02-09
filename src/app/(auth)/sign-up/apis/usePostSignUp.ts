import postSignUp from '@/app/(auth)/sign-up/apis/postSignUp';
import { useMutation } from '@tanstack/react-query';

const usePostSignUp = () => {
  return useMutation({
    mutationFn: postSignUp,
  });
};

export default usePostSignUp;
