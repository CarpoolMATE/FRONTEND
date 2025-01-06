/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupPage: React.FC = () => {
  const router = useRouter();

  const [canView, setCanView] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [duplicate, setDuplicate] = useState(true);
  const [duplicateName, setDuplicateName] = useState(true);
  const [duplicateEmail, setDuplicateEmail] = useState(true);
  const [modal, setModal] = useState(false);

  const [modalMsg, setModalMsg] = useState("");

  function checkAllConditions(text: string) {
    if (
      checkSpacing(text) &&
      checkCharacterLimit(text) &&
      !checkSpecialCharacters(text)
    ) {
      setNameError(false);
    } else setNameError(true);
  }

  // 띄어쓰기 체크 (연속된 공백 체크)
  function checkSpacing(text: string): boolean {
    return !text.includes(" ");
  }

  // 글자수 제한 체크 (8자 이하)
  function checkCharacterLimit(text: string): boolean {
    // 한글만 있는지 확인하는 정규식
    const koreanOnly = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{1,8}$/;
    return koreanOnly.test(text);
  }

  // 특수문자 체크
  function checkSpecialCharacters(text: string): boolean {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharRegex.test(text);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    router.push("/universities");
  };

  const checkDuplicate = async () => {
    setModal(true);
    setModalMsg("사용 가능한 아이디입니다.");
    setDuplicate(false);
  };

  const checkDuplicateName = async () => {
    setModal(true);
    setModalMsg("사용 가능한 닉네임입니다.");
    setDuplicateName(false);
  };

  const checkDuplicateEmail = async () => {
    setModal(true);
    setModalMsg("사용 가능한 이메일입니다.");
    setDuplicateEmail(false);
  };

  const validateId = (value: string) => {
    const alphanumericPattern = /^[A-Za-z0-9]+$/;
    return alphanumericPattern.test(value);
  };
  function validateString(input: string): boolean {
    // 3~20자 체크
    setPasswordLengthError(false);

    if (input.length < 3 || input.length > 20) {
      setPasswordLengthError(true);
    }

    // 영문자가 최소 1개 있는지 확인
    const hasLetter = /[a-zA-Z]/.test(input);
    // 숫자가 최소 1개 있는지 확인
    const hasNumber = /[0-9]/.test(input);

    // 둘 다 있어야 true 반환
    return !(hasLetter && hasNumber);
  }

  function validateEmail(email: string): boolean {
    // RFC 5322 표준을 준수하는 정교한 이메일 정규식
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // 기본 형식 검증
    if (!emailRegex.test(email)) {
      return false;
    }

    // 추가 검증
    // 1. 전체 길이 체크 (RFC 5321에 따라 최대 254자)
    if (email.length > 254) {
      return false;
    }

    // 2. 로컬 파트(@ 이전 부분) 길이 체크 (최대 64자)
    const localPart = email.split("@")[0];
    if (localPart.length > 64) {
      return false;
    }

    return true;
  }

  return (
    <div className="relative w-full px-[20px] pt-[100px]">
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
          회원가입
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-[335px] h-full flex-col justify-start items-start  inline-flex">
          <div className="pl-[10px] text-[#4f4f4f] text-sm font-medium font-['Pretendard'] mb-[10px]">
            아이디
          </div>
          <div className="flex">
            <input
              value={id}
              onChange={(e) => {
                setDuplicate(true);
                setIdError(
                  e.target.value !== "" && !validateId(e.target.value)
                );
                setId(e.target.value);
              }}
              placeholder="아이디를 입력해주세요"
              className={`${
                idError
                  ? "border border-solid border-[#e0302d] focus:border-[#e0302d]  focus:ring-[#e0302d] focus:ring-1 transition-colors outline-none"
                  : " border border-[#e9e9e9]"
              } w-[247px] self-stretch h-[51px] p-[15px] bg-white rounded-[10px] justify-start items-center gap-3 inline-flex placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']`}
            />
            {id && duplicate && !idError ? (
              <div
                onClick={() => checkDuplicate()}
                className="cursor-pointer ml-[8px] h-[51px] px-3 py-2.5 bg-[#007aff] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-white text-base font-medium font-['Pretendard']">
                  중복확인
                </div>
              </div>
            ) : duplicate ? (
              <div className="ml-[8px] h-[51px] px-3 py-2.5 bg-[#c3c3c3] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-medium font-['Pretendard']">
                  중복확인
                </div>
              </div>
            ) : (
              !duplicate && (
                <div className="ml-[8px] h-[51px] px-3 py-2.5 bg-[#d4e8ff] rounded-[10px] border border-[#007aff]/20 justify-center items-center gap-2.5 flex">
                  <div className="w-[58px] text-[#007aff] text-base font-medium font-['Pretendard']">
                    사용가능
                  </div>
                </div>
              )
            )}
          </div>
          {!idError && id ? (
            <div className="pl-[10px] flex items-center gap-[10px] mt-[15px]">
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
          ) : idError && id ? (
            <div className="pl-[10px] flex items-center gap-[10px] mt-[15px]">
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
          ) : (
            <div className="w-full h-[20px] mt-[15px]"></div>
          )}

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
              type={`${canView ? "text" : "password"}`}
              placeholder="비밀번호를 입력해주세요"
              className={`${
                passwordError || passwordLengthError
                  ? "border border-[#e0302d] focus:border-[#e0302d]  focus:ring-[#e0302d] focus:ring-1 transition-colors outline-none"
                  : "border border-[#e9e9e9]"
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
                </svg>{" "}
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
              type={`${canView ? "text" : "password"}`}
              placeholder="비밀번호 확인"
              className={`${
                passwordConfirmError
                  ? "border border-[#e0302d] focus:border-[#e0302d]  focus:ring-[#e0302d] focus:ring-1 transition-colors outline-none"
                  : "border border-[#e9e9e9]"
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

          <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex mt-[25px]">
            <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                이름
              </div>
            </div>
            <div className="flex items-center">
              <input
                value={name}
                maxLength={8}
                onChange={(e) => {
                  setName(e.target.value);
                  checkAllConditions(e.target.value);
                }}
                placeholder="이름을 입력해주세요"
                className={`${
                  idError ? "rounded-[10px] border border-[#e0302d]" : ""
                } w-[247px] self-stretch h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-3 inline-flex placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']`}
              />
              {name && duplicateName && !nameError ? (
                <div
                  onClick={() => checkDuplicateName()}
                  className="cursor-pointer ml-[8px] h-[51px] px-3 py-2.5 bg-[#007aff] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-white text-base font-medium font-['Pretendard']">
                    중복확인
                  </div>
                </div>
              ) : duplicateName ? (
                <div className="ml-[8px] h-[51px] px-3 py-2.5 bg-[#c3c3c3] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-base font-medium font-['Pretendard']">
                    중복확인
                  </div>
                </div>
              ) : (
                !duplicateName && (
                  <div className="ml-[8px] h-[51px] px-3 py-2.5 bg-[#d4e8ff] rounded-[10px] border border-[#007aff]/20 justify-center items-center gap-2.5 flex">
                    <div className="w-[58px] text-[#007aff] text-base font-medium font-['Pretendard']">
                      사용가능
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex items-center flex-wrap justify-start">
              {checkCharacterLimit(name) && name ? (
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
                    한글 8자 이내
                  </div>
                </div>
              ) : (
                !checkCharacterLimit(name) &&
                name && (
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
                    </svg>
                    <div className="text-[#e0302d] text-sm font-medium font-['Pretendard']">
                      한글 8자 이내
                    </div>
                  </div>
                )
              )}
              {!checkSpecialCharacters(name) && name ? (
                <div className="ml-[45px] flex items-center gap-[10px]">
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
                    특수문자 금지
                  </div>
                </div>
              ) : (
                checkSpecialCharacters(name) &&
                name && (
                  <div className="ml-[45px] flex items-center gap-[10px]">
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
                      특수문자 금지
                    </div>
                  </div>
                )
              )}
              {checkSpacing(name) && name ? (
                <div className="pl-[10px] mr-[10px] flex items-center gap-[10px]">
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
                    띄어쓰기 금지
                  </div>
                </div>
              ) : !checkSpacing(name) ? (
                name && (
                  <div className="ml-[53.85px] flex items-center gap-[10px] mr-[10px]">
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
                      띄어쓰기 금지
                    </div>
                  </div>
                )
              ) : (
                <div className="w-full h-[40px]"></div>
              )}
            </div>
          </div>
          <div className="self-stretch h-[71px] flex-col justify-start items-start gap-2.5 flex mt-[15px]">
            <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
                이메일
              </div>
            </div>
            <div className="flex items-center">
              <input
                value={email}
                onChange={(e) => {
                  setEmailError(!validateEmail(e.target.value));
                  setEmail(e.target.value);
                }}
                placeholder="이메일을 입력해주세요"
                className={`${
                  emailError && email
                    ? "rounded-[10px] border border-[#e0302d]"
                    : "border border-[#e9e9e9]"
                } w-[247px] self-stretch h-[51px] p-[15px] bg-white rounded-[10px]  justify-start items-center gap-3 inline-flex placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']`}
              />
              {email && duplicateEmail && !emailError ? (
                <div
                  onClick={() => checkDuplicateEmail()}
                  className="cursor-pointer ml-[8px] h-[51px] px-3 py-2.5 bg-[#007aff] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-white text-base font-medium font-['Pretendard']">
                    중복확인
                  </div>
                </div>
              ) : duplicateEmail ? (
                <div className="ml-[8px] h-[51px] px-3 py-2.5 bg-[#c3c3c3] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-base font-medium font-['Pretendard']">
                    중복확인
                  </div>
                </div>
              ) : (
                !duplicateEmail && (
                  <div className="ml-[8px] h-[51px] px-3 py-2.5 bg-[#d4e8ff] rounded-[10px] border border-[#007aff]/20 justify-center items-center gap-2.5 flex">
                    <div className="w-[58px] text-[#007aff] text-base font-medium font-['Pretendard']">
                      사용가능
                    </div>
                  </div>
                )
              )}
            </div>

            {!emailError && email ? (
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
                  올바른 형식
                </div>
              </div>
            ) : (
              emailError && (
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
                    올바른 형식
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {id &&
        !duplicate &&
        password &&
        !idError &&
        !passwordError &&
        !emailError &&
        !nameError &&
        !duplicateEmail &&
        !duplicateName &&
        name &&
        email ? (
          <div
            onClick={(e) => handleSubmit(e)}
            className="w-[335px] h-[51px] px-[30px] py-[15px] cursor-pointer bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[50px]"
          >
            <div className="text-white text-lg font-semibold font-['Pretendard']">
              회원가입
            </div>
          </div>
        ) : (
          <div className="w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[50px]">
            <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
              회원가입
            </div>
          </div>
        )}{" "}
      </form>
      {modal && (
        <div
          className="fixed left-0 top-0 w-full h-full bg-black/40 flex justify-center items-center"
          onClick={() => setModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[270px] h-[102px] relative bg-white pt-[20px]  rounded-[15px]"
          >
            <div className="text-center text-black text-[17px] font-normal font-pretendard leading-snug mb-[15px] px-[16px]">
              {modalMsg}
            </div>
            <div
              className="cursor-pointer h-11 relative border-t border-solid border-[#808080]/60 flex justify-center items-center w-full"
              onClick={() => setModal(false)}
            >
              <div className="text-center text-[#007aff] font-bold text-[17px] font-pretendard leading-snug">
                확인
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
