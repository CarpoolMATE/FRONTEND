import { fetchPost } from '@/apis/fetch';

import {
  CheckDuplicate,
  CheckDuplicateDto,
  PostCheckDuplicateParams,
} from '@/app/(auth)/sign-up/apis/types';

import { CHECK_DUPLICATE_ROUTE_CLASSES } from '@/app/(auth)/sign-up/apis/constants';

const postCheckDuplicate = async (
  params: PostCheckDuplicateParams,
  type: CheckDuplicate,
) => {
  const response = await fetchPost<CheckDuplicateDto, PostCheckDuplicateParams>(
    CHECK_DUPLICATE_ROUTE_CLASSES[type],
    params,
  );

  return response;
};

export default postCheckDuplicate;
