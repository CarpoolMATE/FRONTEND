import { useMutation } from '@tanstack/react-query';

import getSocialLine from '@/app/api/auth/callback/line/apis/getSocialLine';

const useLineLogin = () => useMutation({ mutationFn: getSocialLine });

export default useLineLogin;
