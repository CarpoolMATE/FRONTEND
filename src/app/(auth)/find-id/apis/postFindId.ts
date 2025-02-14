import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { PostFindIdParams } from '@/app/(auth)/find-id/apis/types';

const postFindId = async (params: PostFindIdParams) => {
  const response = await fetchPost<string, PostFindIdParams>(
    API_ROUTES.FIND.FIND_ID,
    params,
  );

  return response;
};

export default postFindId;
