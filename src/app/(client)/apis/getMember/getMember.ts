import { fetchGet } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { ApiSuccessResponse } from '@/apis/types';
import { MemberDto } from '@/types/dtos/member';

const getMember = async () => {
  const response = await fetchGet<ApiSuccessResponse<MemberDto>>(
    API_ROUTES.MEMBER.INFO,
  );

  return response.data;
};

export default getMember;
