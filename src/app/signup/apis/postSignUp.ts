import { fetchPost } from '@/apis/fetch';
import { API_ROUTE } from '@/apis/routes';

export type PostSignUpParams = {
  memberId: string;
  email: string;
  password: string;
  nickname?: string;
  university?: string;
};

const postSignUp = async (params: PostSignUpParams) => {
  const response = await fetchPost<string, PostSignUpParams>(
    API_ROUTE.MEMBER.SIGN_UP,
    params,
  );

  return response;
};

export default postSignUp;
