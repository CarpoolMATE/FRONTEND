import { fetchGet } from '@/apis/fetch';
import { ApiSuccessResponse } from '@/apis/types';
import { API_ROUTES } from '@/constants/routes';
import { MemberDto } from '@/types/dtos/member';

const getSocialKakao = async (code: string) => {
  const response = await fetchGet<ApiSuccessResponse<MemberDto>>(
    `${API_ROUTES.SOCIAL.KAKAO}?code=${code}`,
  );

  return response.data;
};

export default getSocialKakao;
