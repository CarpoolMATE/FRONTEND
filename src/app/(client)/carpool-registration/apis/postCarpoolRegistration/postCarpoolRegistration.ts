import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { ApiSuccessResponse } from '@/apis/types';
import { MemberDto } from '@/types/dtos/member';
import { PostCarpoolRegistrationParams } from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/types';

const postCarpoolRegistration = async (
  params: PostCarpoolRegistrationParams,
) => {
  const response = await fetchPost<ApiSuccessResponse<MemberDto>>(
    API_ROUTES.MEMBER.DRIVER,
    params,
  );

  return response.data;
};

export default postCarpoolRegistration;
