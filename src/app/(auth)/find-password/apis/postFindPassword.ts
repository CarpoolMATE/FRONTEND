import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import {
  FindPasswordDto,
  PostFindPasswordParams,
} from '@/app/(auth)/find-password/apis/types';

const postFindPassword = async (params: PostFindPasswordParams) => {
  const response = await fetchPost<FindPasswordDto, PostFindPasswordParams>(
    API_ROUTES.MEMBER.FIND_PASSWORD,
    params,
  );

  return response;
};

export default postFindPassword;
