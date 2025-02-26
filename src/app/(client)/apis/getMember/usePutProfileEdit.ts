import { useMutation } from '@tanstack/react-query';

import putProfileEdit from '@/app/(client)/apis/getMember/putProfileEdit';

const usePutProfileEdit = () => {
  return useMutation({
    mutationFn: putProfileEdit,
  });
};

export default usePutProfileEdit;
