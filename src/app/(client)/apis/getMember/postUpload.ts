import { fetchPost } from '@/apis/fetch';

import { API_ROUTES } from '@/constants/routes';

import {
  PostUploadParams,
  UploadDto,
} from '@/app/(client)/apis/getMember/types';

const postUpload = async (params: PostUploadParams) => {
  const response = await fetchPost<UploadDto, PostUploadParams>(
    API_ROUTES.FILE,
    params,
  );

  return response;
};

export default postUpload;
