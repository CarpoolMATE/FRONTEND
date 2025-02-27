import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import { ApiSuccessResponse } from '@/apis/types';

const postUpload = async (formData: FormData) => {
  const response = await fetchPost<ApiSuccessResponse<string>>(
    API_ROUTES.FILE_UPLOAD,
    formData,
  );

  return response.data;
};

export default postUpload;
