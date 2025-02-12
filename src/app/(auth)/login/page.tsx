'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { APP_ROUTES } from '@/constants/routes';

import Icon from '@/components/Icon';
import Button from '@/components/Button';

const LoginPage: React.FC = () => {
  const [canView, setCanView] = useState(false);
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    try {
      // await axiosInstance.post('/member/signIn', {
      //   memberId: id,
      //   password: password,
      // });
      router.push('/home');
    } catch (e) {
      setIdError(true);
      setPasswordError(true);
      console.error(e);
    }
  };

  return (
    <div className="relative w-full px-[20px] pt-[57.5px] mb-[20px]">
      <Button intent="icon" onClick={() => router.back()}>
        <Icon icon="CHEVRONS_LEFT" className="text-icon" />
      </Button>
      <div className="text-center text-[#007aff] text-[64px] font-normal font-['Hancom Sans SemiBold'] mb-[82.82px]">
        mate
      </div>
      <div className="w-[335px] h-[240px]">
        <div className="self-stretch  flex-col justify-start items-start flex">
          <div className="self-stretch h-[51px] flex-col justify-start items-start flex">
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디"
              className={`${
                idError || passwordError
                  ? 'rounded-[10px] border border-[#e0302d]'
                  : ' border border-[#e9e9e9]'
              } self-stretch h-[51px] p-[15px] bg-white rounded-[10px]  justify-start items-center gap-3 inline-flex placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']`}
            />
          </div>

          <div className="relative self-stretch  h-[51px]">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={`${canView ? 'text' : 'password'}`}
              placeholder="비밀번호"
              className={`${
                passwordError || idError
                  ? 'rounded-[10px] border border-[#e0302d]'
                  : ' border border-[#e9e9e9]'
              } mt-[15px] w-full h-[51px] placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard'] self-stretch p-[15px] bg-white rounded-[10px] justify-between items-center inline-flex relative`}
            />
            {(passwordError || idError) && (
              <div className="pl-[10px] mt-[3px] text-[#e0302d] text-sm font-normal font-['Pretendard']">
                회원정보를 다시 입력해주세요
              </div>
            )}
            <div className="cursor-pointer absolute right-[15px] bottom-[0px]">
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
        </div>
        <div className="justify-center w-full items-center gap-[15px] inline-flex mt-[50px]">
          <div
            onClick={() => router.push(APP_ROUTES.FIND_ID)}
            className="cursor-pointer text-center text-[#aaaaaa] text-sm font-medium font-['Pretendard'] leading-[21px]"
          >
            아이디 찾기
          </div>
          <div className="opacity-50 text-center text-[#aaaaaa] text-base font-normal font-['Pretendard'] leading-normal">
            |
          </div>
          <div
            onClick={() => router.push(APP_ROUTES.FIND_PASSWORD)}
            className="cursor-pointer text-center text-[#aaaaaa] text-sm font-medium font-['Pretendard'] leading-[21px]"
          >
            비밀번호 찾기
          </div>
        </div>
      </div>
      {id && password ? (
        <div
          onClick={() => login()}
          className="w-[335px] h-[51px] px-[30px] py-[15px] cursor-pointer bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[243px]"
        >
          <div className="text-white text-lg font-semibold font-['Pretendard']">
            로그인
          </div>
        </div>
      ) : (
        <div className="w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[243px]">
          <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
            로그인
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
