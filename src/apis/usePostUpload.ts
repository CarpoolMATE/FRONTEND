import { useMutation } from '@tanstack/react-query';

import postUpload from '@/apis/postUpload';

const usePostUpload = () => {
  return useMutation({
    mutationFn: postUpload,
  });
};

export default usePostUpload;
