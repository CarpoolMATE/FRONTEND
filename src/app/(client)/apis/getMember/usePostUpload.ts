import { useMutation } from '@tanstack/react-query';

import postUpload from '@/app/(client)/apis/getMember/postUpload';

const usePostUpload = () => {
  return useMutation({
    mutationFn: postUpload,
  });
};

export default usePostUpload;
