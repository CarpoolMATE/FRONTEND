'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QueryKey } from '@/constants/keys';

import postReservation from '@/app/(client)/home/apis/postReservation/postReservation';

const usePostReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postReservation,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === QueryKey.CarpoolList,
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.ReservationDetail],
      });
    },
  });
};

export default usePostReservation;
