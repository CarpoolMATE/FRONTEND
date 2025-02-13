import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { PostSignInParams } from '@/app/(auth)/login/apis/types';

const postSignIn = async (params: PostSignInParams) => {
  const response = await fetchPost<string, PostSignInParams>(
    API_ROUTES.MEMBER.SIGN_IN,
    params,
  );

  return response;
};

export default postSignIn;
