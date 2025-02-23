import { fetchPost } from '@/apis/fetch';

import { ApiSuccessResponse } from '@/apis/types';
import { PostReportParams } from '@/app/(client)/report/[carpoolId]/apis/postReport/types';

import { API_ROUTES } from '@/constants/routes';

const postReport = async ({ carpoolId, ...body }: PostReportParams) => {
  const response = await fetchPost<ApiSuccessResponse<string>>(
    `${API_ROUTES.REPORT}/${carpoolId}`,
    body,
  );

  return response.data;
};

export default postReport;
