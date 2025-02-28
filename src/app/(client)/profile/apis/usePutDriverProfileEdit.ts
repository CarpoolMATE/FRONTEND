import { useMutation } from '@tanstack/react-query';

import putDriverProfileEdit from '@/app/(client)/profile/apis/putDriverProfileEdit';

const usePutDriverProfileEdit = () => {
  return useMutation({
    mutationFn: putDriverProfileEdit,
  });
};

export default usePutDriverProfileEdit;
