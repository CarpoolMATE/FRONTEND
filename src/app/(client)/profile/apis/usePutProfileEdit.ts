import { useMutation } from '@tanstack/react-query';

import putProfileEdit from '@/app/(client)/profile/apis/putProfileEdit';

const usePutProfileEdit = () => {
  return useMutation({
    mutationFn: putProfileEdit,
  });
};

export default usePutProfileEdit;
