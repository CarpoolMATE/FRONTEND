import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { ApiSuccessResponse } from '@/apis/types';
import { MemberDto } from '@/types/dtos/member';
import { PostMemberDriverRegistrationParams } from '@/app/(client)/driver-registration/apis/postMemberDriver/types';

const postMemberDriver = async (params: PostMemberDriverRegistrationParams) => {
  const response = await fetchPost<ApiSuccessResponse<MemberDto>>(
    API_ROUTES.MEMBER.DRIVER,
    params,
  );

  return response.data;
};

export default postMemberDriver;
