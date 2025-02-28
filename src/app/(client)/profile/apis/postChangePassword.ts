import { API_ROUTES } from '@/constants/routes';

import { fetchPost } from '@/apis/fetch';

import { ApiSuccessResponse } from '@/apis/types';
import { PostChangepasswordParams } from '@/app/(client)/profile/apis/types';

const postChangePassword = async (params: PostChangepasswordParams) => {
  const response = await fetchPost<
    ApiSuccessResponse<string>,
    PostChangepasswordParams
  >(API_ROUTES.MEMBER.CHANGE_PASSWORD, params);

  return response;
};

export default postChangePassword;
