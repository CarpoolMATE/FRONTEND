import { fetchPost } from '@/apis/fetch';

import {
  CheckDuplicate,
<<<<<<< HEAD
  CheckDuplicateDto,
  PostCheckDuplicateParams,
} from '@/app/(auth)/sign-up/apis/types';

=======
  PostCheckDuplicateParams,
} from '@/app/(auth)/sign-up/apis/types';
>>>>>>> 8d9e342 (Feat : 회원가입시 중복검사 api를 연동했습니다.)
import { CHECK_DUPLICATE_ROUTE_CLASSES } from '@/app/(auth)/sign-up/apis/constants';

const postCheckDuplicate = async (
  params: PostCheckDuplicateParams,
  type: CheckDuplicate,
) => {
<<<<<<< HEAD
  const response = await fetchPost<CheckDuplicateDto, PostCheckDuplicateParams>(
=======
  const response = await fetchPost<boolean, PostCheckDuplicateParams>(
>>>>>>> 8d9e342 (Feat : 회원가입시 중복검사 api를 연동했습니다.)
    CHECK_DUPLICATE_ROUTE_CLASSES[type],
    params,
  );

  return response;
};

export default postCheckDuplicate;
