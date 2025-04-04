import { API_ROUTES } from '@/constants/routes';

import { fetchPost } from '@/apis/fetch';

import { PostSignUpParams, SignUpDto } from '@/app/(auth)/sign-up/apis/types';

const postSignUp = async (params: PostSignUpParams) => {
  const response = await fetchPost<SignUpDto, PostSignUpParams>(
    API_ROUTES.MEMBER.SIGN_UP,
    params,
  );

  return response;
};

export default postSignUp;
