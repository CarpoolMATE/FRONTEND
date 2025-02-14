import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { FindIdDto, PostFindIdParams } from '@/app/(auth)/find-id/apis/types';

const postFindId = async (params: PostFindIdParams) => {
  const response = await fetchPost<FindIdDto, PostFindIdParams>(
    API_ROUTES.FIND.FIND_ID,
    params,
  );

  return response;
};

export default postFindId;
