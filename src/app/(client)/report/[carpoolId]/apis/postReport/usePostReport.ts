import { useMutation } from '@tanstack/react-query';

import postReport from '@/app/(client)/report/[carpoolId]/apis/postReport/portReport';

import { PostReportParams } from '@/app/(client)/report/[carpoolId]/apis/postReport/types';

const usePostReport = () =>
  useMutation({
    mutationFn: (params: PostReportParams) => postReport(params),
  });

export default usePostReport;
