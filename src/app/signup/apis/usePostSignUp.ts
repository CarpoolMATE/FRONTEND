import postSignUp from '@/app/signup/apis/postSignUp';
import { useMutation } from '@tanstack/react-query';

const usePostSignUp = () => {
  return useMutation({
    mutationFn: postSignUp,
  });
};

export default usePostSignUp;
