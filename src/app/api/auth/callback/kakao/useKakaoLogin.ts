import { useMutation } from '@tanstack/react-query';

import getSocialKakao from '@/app/api/auth/callback/kakao/getSocialKakao';

const useKakaoLogin = () => useMutation({ mutationFn: getSocialKakao });

export default useKakaoLogin;
