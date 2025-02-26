import { PostUploadParams, UploadDto } from '@/apis/types';

import { API_ROUTES } from '@/constants/routes';

import { fetchPost } from '@/apis/fetch';

const postUpload = async (params: PostUploadParams) => {
  const response = await fetchPost<UploadDto, PostUploadParams>(
    API_ROUTES.FILE_UPLOAD,
    params,
  );

  return response;
};

export default postUpload;
