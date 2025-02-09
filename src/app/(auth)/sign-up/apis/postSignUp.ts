import { API_ROUTES } from '@/constants/routes';

import { fetchPost } from '@/apis/fetch';

export type PostSignUpParams = {
  memberId: string;
  email: string;
  password: string;
  nickname?: string;
  university?: string;
};

const postSignUp = async (params: PostSignUpParams) => {
  const response = await fetchPost<string, PostSignUpParams>(
    API_ROUTES.MEMBER.SIGN_UP,
    params,
  );

  return response;
};

export default postSignUp;
