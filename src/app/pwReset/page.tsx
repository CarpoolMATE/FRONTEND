'use client';
import { useSignupStore } from '@/store/signup';
import { useRouter } from 'next/navigation';
import React from 'react';

const PwFindPage: React.FC = () => {
  const password = useSignupStore((state: { password: any }) => state.password);
  const passwordConfirm = useSignupStore(
    (state: { passwordConfirm: any }) => state.passwordConfirm,
  );
  const setCanView = useSignupStore(
    (state: { setCanView: any }) => state.setCanView,
  );
  const canView = useSignupStore((state: { canView: any }) => state.canView);

  const validateString = useSignupStore(
    (state: { validateString: any }) => state.validateString,
  );

  const passwordError = useSignupStore(
    (state: { passwordError: any }) => state.passwordError,
  );
  const passwordConfirmError = useSignupStore(
    (state: { passwordConfirmError: any }) => state.passwordConfirmError,
  );
  const passwordLengthError = useSignupStore(
    (state: { passwordLengthError: any }) => state.passwordLengthError,
  );
  const setPassword = useSignupStore(
    (state: { setPassword: any }) => state.setPassword,
  );
  const setPasswordConfirm = useSignupStore(
    (state: { setPasswordConfirm: any }) => state.setPasswordConfirm,
  );
  const setPasswordError = useSignupStore(
    (state: { setPasswordError: any }) => state.setPasswordError,
  );
  const setPasswordConfirmError = useSignupStore(
    (state: { setPasswordConfirmError: any }) => state.setPasswordConfirmError,
  );

  const router = useRouter();

  // const resetPw = async () => {
  //   try {
  //      비밀번호 재설정
  //        await axiosInstance.post("/member/findPassword", {
  //          memberId: id,
  //         email,
  //       });
  //     router.push(`/pwReset`);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className="relative w-full px-[20px] pt-[57.5px]">
      <div className="flex top-[57.5px]">
        <svg
          onClick={() => {
            router.back();
          }}
          className="absolute left-[20px] top-[57.5px] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            id="Rectangle 882"
            d="M10 1.10938L1.82023 7.92585C1.39337 8.28157 1.39337 8.93718 1.82023 9.2929L10 16.1094"
            stroke="#505050"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute left-[141.5px] top-[52.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
          비밀번호 재설정
        </div>
      </div>

      <div className="h-2.5 px-2.5 justify-center items-center gap-2.5 inline-flex mt-[15px]">
        <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
          비밀번호
        </div>
      </div>
      <div className="relative self-stretch  h-[51px] flex-col justify-start items-start flex mb-[15px]">
        <input
          value={password}
          maxLength={20}
          onChange={(e) => {
            setPasswordError(validateString(e.target.value));
            setPasswordConfirmError(passwordConfirm !== e.target.value);
            setPassword(e.target.value);
          }}
          type={`${canView ? 'text' : 'password'}`}
          placeholder="비밀번호를 입력해주세요"
          className={`${
            passwordError || passwordLengthError
              ? 'border border-[#e0302d] focus:border-[#e0302d]  focus:ring-[#e0302d] focus:ring-1 transition-colors outline-none'
              : 'border border-[#e9e9e9]'
          } 
           mt-[10px] w-full h-[51px] placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard'] self-stretch p-[15px] bg-white rounded-[10px]  justify-between items-center inline-flex relative`}
        />
        <div className="cursor-pointer absolute right-[15px] bottom-[3px]">
          <svg
            onClick={() => setCanView(!canView)}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              id="Vector"
              d="M13.771 10.2788L12.396 8.88281C12.632 8.09115 12.4513 7.42448 11.854 6.88281C11.257 6.34115 10.6112 6.18831 9.9165 6.42431L8.5625 5.07031C8.78483 4.94531 9.05567 4.84465 9.375 4.76831C9.69433 4.69198 10.0068 4.65381 10.3125 4.65381C11.3958 4.65381 12.3125 5.02881 13.0625 5.77881C13.8125 6.52881 14.1875 7.44548 14.1875 8.52881C14.1875 8.83415 14.1528 9.14315 14.0835 9.45581C14.0138 9.76815 13.9097 10.0425 13.771 10.2788ZM16.5835 13.1118L15.354 11.8618C15.9653 11.3898 16.507 10.869 16.979 10.2993C17.4513 9.72998 17.8125 9.13981 18.0625 8.52881C17.3542 7.02881 16.316 5.83431 14.948 4.94531C13.58 4.05631 12.0765 3.61181 10.4375 3.61181C9.9235 3.61181 9.39917 3.65698 8.8645 3.74731C8.32983 3.83765 7.90283 3.95231 7.5835 4.09131L6.1665 2.65381C6.70817 2.43148 7.3575 2.23698 8.1145 2.07031C8.8715 1.90365 9.632 1.82031 10.396 1.82031C12.521 1.82031 14.4515 2.42798 16.1875 3.64331C17.9235 4.85865 19.1943 6.48715 20 8.52881C19.6527 9.45915 19.1838 10.3098 18.5935 11.0808C18.0035 11.8515 17.3335 12.5285 16.5835 13.1118ZM17.1875 18.1953L13.625 14.6953C13.139 14.876 12.6112 15.0113 12.0415 15.1013C11.4722 15.1916 10.8958 15.2368 10.3125 15.2368C8.14583 15.2368 6.1875 14.6293 4.4375 13.4143C2.6875 12.199 1.41667 10.5705 0.625 8.52881C0.889 7.79248 1.2535 7.08415 1.7185 6.40381C2.18383 5.72315 2.74983 5.07031 3.4165 4.44531L0.896 1.92431L2.104 0.695312L18.354 16.9453L17.1875 18.1953ZM4.6875 5.71631C4.22917 6.10498 3.809 6.54598 3.427 7.03931C3.045 7.53231 2.74983 8.02881 2.5415 8.52881C3.24983 10.0425 4.302 11.2403 5.698 12.1223C7.09367 13.0043 8.6665 13.4453 10.4165 13.4453C10.7362 13.4453 11.0592 13.4245 11.3855 13.3828C11.7118 13.3411 11.9653 13.2856 12.146 13.2163L11.229 12.2578C11.104 12.2995 10.9617 12.3341 10.802 12.3618C10.6423 12.3898 10.4792 12.4038 10.3125 12.4038C9.24317 12.4038 8.33 12.0323 7.573 11.2893C6.816 10.546 6.4375 9.62581 6.4375 8.52881C6.4375 8.36215 6.45133 8.20231 6.479 8.04931C6.507 7.89665 6.54183 7.75081 6.5835 7.61181L4.6875 5.71631Z"
              fill="#505050"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center">
        {!passwordLengthError && password ? (
          <div className="pl-[10px] flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <path
                id="Vector"
                d="M7.67319 1.21948L3.00196 6.78047L1 4.55608"
                stroke="#007AFF"
                strokeWidth="1.16986"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
              3~20자 이내
            </div>
          </div>
        ) : passwordLengthError && password ? (
          <div className="pl-[10px] flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                id="Vector"
                d="M0.62277 7.25901C0.544161 7.18038 0.5 7.07374 0.5 6.96256C0.5 6.85137 0.544161 6.74473 0.62277 6.6661L3.29131 3.99757L0.62277 1.32903C0.546388 1.24995 0.504124 1.14403 0.505079 1.03408C0.506034 0.924138 0.550134 0.818969 0.627879 0.741224C0.705624 0.663479 0.810793 0.619379 0.920736 0.618424C1.03068 0.617469 1.1366 0.659733 1.21568 0.736115L3.88422 3.40465L6.55276 0.736115C6.63184 0.659733 6.73776 0.617469 6.8477 0.618424C6.95765 0.619379 7.06282 0.663479 7.14056 0.741224C7.21831 0.818969 7.26241 0.924138 7.26336 1.03408C7.26432 1.14403 7.22205 1.24995 7.14567 1.32903L4.47713 3.99757L7.14567 6.6661C7.22205 6.74518 7.26432 6.8511 7.26336 6.96105C7.26241 7.07099 7.21831 7.17616 7.14056 7.25391C7.06282 7.33165 6.95765 7.37575 6.8477 7.37671C6.73776 7.37766 6.63184 7.3354 6.55276 7.25901L3.88422 4.59048L1.21568 7.25901C1.13705 7.33762 1.03042 7.38178 0.919228 7.38178C0.80804 7.38178 0.701404 7.33762 0.62277 7.25901Z"
                fill="#E0302D"
              />
            </svg>{' '}
            <div className="text-[#e0302d] text-sm font-medium font-['Pretendard']">
              3~20자 이내
            </div>
          </div>
        ) : (
          <div className="w-full h-[20px]"></div>
        )}
        {!passwordError && password ? (
          <div className="ml-[53.85px] flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <path
                id="Vector"
                d="M7.67319 1.21948L3.00196 6.78047L1 4.55608"
                stroke="#007AFF"
                strokeWidth="1.16986"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
              영문, 숫자 조합
            </div>
          </div>
        ) : (
          passwordError &&
          password && (
            <div className="ml-[53.85px] flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path
                  id="Vector"
                  d="M0.62277 7.25901C0.544161 7.18038 0.5 7.07374 0.5 6.96256C0.5 6.85137 0.544161 6.74473 0.62277 6.6661L3.29131 3.99757L0.62277 1.32903C0.546388 1.24995 0.504124 1.14403 0.505079 1.03408C0.506034 0.924138 0.550134 0.818969 0.627879 0.741224C0.705624 0.663479 0.810793 0.619379 0.920736 0.618424C1.03068 0.617469 1.1366 0.659733 1.21568 0.736115L3.88422 3.40465L6.55276 0.736115C6.63184 0.659733 6.73776 0.617469 6.8477 0.618424C6.95765 0.619379 7.06282 0.663479 7.14056 0.741224C7.21831 0.818969 7.26241 0.924138 7.26336 1.03408C7.26432 1.14403 7.22205 1.24995 7.14567 1.32903L4.47713 3.99757L7.14567 6.6661C7.22205 6.74518 7.26432 6.8511 7.26336 6.96105C7.26241 7.07099 7.21831 7.17616 7.14056 7.25391C7.06282 7.33165 6.95765 7.37575 6.8477 7.37671C6.73776 7.37766 6.63184 7.3354 6.55276 7.25901L3.88422 4.59048L1.21568 7.25901C1.13705 7.33762 1.03042 7.38178 0.919228 7.38178C0.80804 7.38178 0.701404 7.33762 0.62277 7.25901Z"
                  fill="#E0302D"
                />
              </svg>
              <div className="text-[#e0302d] text-sm font-medium font-['Pretendard']">
                영문, 숫자 조합
              </div>
            </div>
          )
        )}
      </div>

      <div className="h-2.5 px-2.5 justify-center items-center gap-2.5 inline-flex mt-[25px]">
        <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
          비밀번호 확인
        </div>
      </div>
      <div className="relative self-stretch  h-[51px] flex-col justify-start items-start flex mb-[15px]">
        <input
          value={passwordConfirm}
          maxLength={20}
          onChange={(e) => {
            setPasswordConfirmError(password !== e.target.value);
            setPasswordConfirm(e.target.value);
          }}
          type={`${canView ? 'text' : 'password'}`}
          placeholder="비밀번호 확인"
          className={`${
            passwordConfirmError
              ? 'border border-[#e0302d] focus:border-[#e0302d]  focus:ring-[#e0302d] focus:ring-1 transition-colors outline-none'
              : 'border border-[#e9e9e9]'
          } 
           mt-[10px] w-full h-[51px] placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard'] self-stretch p-[15px] bg-white rounded-[10px]  justify-between items-center inline-flex relative`}
        />
        <div className="cursor-pointer absolute right-[15px] bottom-[3px]">
          <svg
            onClick={() => setCanView(!canView)}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              id="Vector"
              d="M13.771 10.2788L12.396 8.88281C12.632 8.09115 12.4513 7.42448 11.854 6.88281C11.257 6.34115 10.6112 6.18831 9.9165 6.42431L8.5625 5.07031C8.78483 4.94531 9.05567 4.84465 9.375 4.76831C9.69433 4.69198 10.0068 4.65381 10.3125 4.65381C11.3958 4.65381 12.3125 5.02881 13.0625 5.77881C13.8125 6.52881 14.1875 7.44548 14.1875 8.52881C14.1875 8.83415 14.1528 9.14315 14.0835 9.45581C14.0138 9.76815 13.9097 10.0425 13.771 10.2788ZM16.5835 13.1118L15.354 11.8618C15.9653 11.3898 16.507 10.869 16.979 10.2993C17.4513 9.72998 17.8125 9.13981 18.0625 8.52881C17.3542 7.02881 16.316 5.83431 14.948 4.94531C13.58 4.05631 12.0765 3.61181 10.4375 3.61181C9.9235 3.61181 9.39917 3.65698 8.8645 3.74731C8.32983 3.83765 7.90283 3.95231 7.5835 4.09131L6.1665 2.65381C6.70817 2.43148 7.3575 2.23698 8.1145 2.07031C8.8715 1.90365 9.632 1.82031 10.396 1.82031C12.521 1.82031 14.4515 2.42798 16.1875 3.64331C17.9235 4.85865 19.1943 6.48715 20 8.52881C19.6527 9.45915 19.1838 10.3098 18.5935 11.0808C18.0035 11.8515 17.3335 12.5285 16.5835 13.1118ZM17.1875 18.1953L13.625 14.6953C13.139 14.876 12.6112 15.0113 12.0415 15.1013C11.4722 15.1916 10.8958 15.2368 10.3125 15.2368C8.14583 15.2368 6.1875 14.6293 4.4375 13.4143C2.6875 12.199 1.41667 10.5705 0.625 8.52881C0.889 7.79248 1.2535 7.08415 1.7185 6.40381C2.18383 5.72315 2.74983 5.07031 3.4165 4.44531L0.896 1.92431L2.104 0.695312L18.354 16.9453L17.1875 18.1953ZM4.6875 5.71631C4.22917 6.10498 3.809 6.54598 3.427 7.03931C3.045 7.53231 2.74983 8.02881 2.5415 8.52881C3.24983 10.0425 4.302 11.2403 5.698 12.1223C7.09367 13.0043 8.6665 13.4453 10.4165 13.4453C10.7362 13.4453 11.0592 13.4245 11.3855 13.3828C11.7118 13.3411 11.9653 13.2856 12.146 13.2163L11.229 12.2578C11.104 12.2995 10.9617 12.3341 10.802 12.3618C10.6423 12.3898 10.4792 12.4038 10.3125 12.4038C9.24317 12.4038 8.33 12.0323 7.573 11.2893C6.816 10.546 6.4375 9.62581 6.4375 8.52881C6.4375 8.36215 6.45133 8.20231 6.479 8.04931C6.507 7.89665 6.54183 7.75081 6.5835 7.61181L4.6875 5.71631Z"
              fill="#505050"
            />
          </svg>
        </div>
      </div>
      {!passwordConfirmError && passwordConfirm ? (
        <div className="flex pl-[10px] items-center gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
          >
            <path
              id="Vector"
              d="M7.67319 1.21948L3.00196 6.78047L1 4.55608"
              stroke="#007AFF"
              strokeWidth="1.16986"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
            비밀번호 일치
          </div>
        </div>
      ) : passwordConfirmError ? (
        <div className="flex pl-[10px] items-center gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              id="Vector"
              d="M0.62277 7.25901C0.544161 7.18038 0.5 7.07374 0.5 6.96256C0.5 6.85137 0.544161 6.74473 0.62277 6.6661L3.29131 3.99757L0.62277 1.32903C0.546388 1.24995 0.504124 1.14403 0.505079 1.03408C0.506034 0.924138 0.550134 0.818969 0.627879 0.741224C0.705624 0.663479 0.810793 0.619379 0.920736 0.618424C1.03068 0.617469 1.1366 0.659733 1.21568 0.736115L3.88422 3.40465L6.55276 0.736115C6.63184 0.659733 6.73776 0.617469 6.8477 0.618424C6.95765 0.619379 7.06282 0.663479 7.14056 0.741224C7.21831 0.818969 7.26241 0.924138 7.26336 1.03408C7.26432 1.14403 7.22205 1.24995 7.14567 1.32903L4.47713 3.99757L7.14567 6.6661C7.22205 6.74518 7.26432 6.8511 7.26336 6.96105C7.26241 7.07099 7.21831 7.17616 7.14056 7.25391C7.06282 7.33165 6.95765 7.37575 6.8477 7.37671C6.73776 7.37766 6.63184 7.3354 6.55276 7.25901L3.88422 4.59048L1.21568 7.25901C1.13705 7.33762 1.03042 7.38178 0.919228 7.38178C0.80804 7.38178 0.701404 7.33762 0.62277 7.25901Z"
              fill="#E0302D"
            />
          </svg>
          <div className="text-[#e0302d] text-sm font-medium font-['Pretendard']">
            비밀번호 일치
          </div>
        </div>
      ) : (
        <div className="w-full h-[19px]"></div>
      )}
    </div>
  );
};

export default PwFindPage;
