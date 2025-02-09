'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useRef, Suspense } from 'react';

// 타입 정의
interface ValidationIconProps {
  isValid: boolean;
  text: string;
}

// 재사용 가능한 컴포넌트들
const ValidationIcon: React.FC<ValidationIconProps> = ({ isValid, text }) => (
  <div className="flex items-center gap-[10px]">
    {isValid ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
      >
        <path
          d="M7.67319 1.21948L3.00196 6.78047L1 4.55608"
          stroke="#007AFF"
          strokeWidth="1.16986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <path
          d="M0.62277 7.25901C0.544161 7.18038 0.5 7.07374 0.5 6.96256C0.5 6.85137 0.544161 6.74473 0.62277 6.6661L3.29131 3.99757L0.62277 1.32903C0.546388 1.24995 0.504124 1.14403 0.505079 1.03408C0.506034 0.924138 0.550134 0.818969 0.627879 0.741224C0.705624 0.663479 0.810793 0.619379 0.920736 0.618424C1.03068 0.617469 1.1366 0.659733 1.21568 0.736115L3.88422 3.40465L6.55276 0.736115C6.63184 0.659733 6.73776 0.617469 6.8477 0.618424C6.95765 0.619379 7.06282 0.663479 7.14056 0.741224C7.21831 0.818969 7.26241 0.924138 7.26336 1.03408C7.26432 1.14403 7.22205 1.24995 7.14567 1.32903L4.47713 3.99757L7.14567 6.6661C7.22205 6.74518 7.26432 6.8511 7.26336 6.96105C7.26241 7.07099 7.21831 7.17616 7.14056 7.25391C7.06282 7.33165 6.95765 7.37575 6.8477 7.37671C6.73776 7.37766 6.63184 7.3354 6.55276 7.25901L3.88422 4.59048L1.21568 7.25901C1.13705 7.33762 1.03042 7.38178 0.919228 7.38178C0.80804 7.38178 0.701404 7.33762 0.62277 7.25901Z"
          fill="#E0302D"
        />
      </svg>
    )}
    <div
      className={`text-sm font-medium font-['Pretendard'] ${
        isValid ? 'text-[#4f4f4f]' : 'text-[#e0302d]'
      }`}
    >
      {text}
    </div>
  </div>
);

const Modal: React.FC<{
  message: string;
  onClose: () => void;
}> = ({ message, onClose }) => (
  <div
    className="fixed left-0 top-0 w-full h-full bg-black/40 flex justify-center items-center"
    onClick={onClose}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[270px] h-[102px] bg-white pt-[20px] rounded-[15px]"
    >
      <div className="text-center text-black text-[17px] font-normal font-pretendard leading-snug mb-[15px] px-[16px]">
        {message}
      </div>
      <div
        className="cursor-pointer h-11 border-t border-solid border-[#808080]/60 flex justify-center items-center w-full"
        onClick={onClose}
      >
        <div className="text-center text-[#007aff] font-bold text-[17px] font-pretendard leading-snug">
          확인
        </div>
      </div>
    </div>
  </div>
);

const PassengerProfile: React.FC<{
  name: string;
  nameError: boolean;
  nicknameDuplicate: boolean;
  setName: (name: string) => void;
  checkAllConditions: (text: string) => void;
  checkDuplicateName: () => void;
  checkSpacing: (text: string) => boolean;
  checkCharacterLimit: (text: string) => boolean;
  checkSpecialCharacters: (text: string) => boolean;
  setNicknameDuplicate: (args: boolean) => void;
  profileImage: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  name,
  nameError,
  nicknameDuplicate,
  setName,
  checkAllConditions,
  checkDuplicateName,
  checkSpacing,
  checkCharacterLimit,
  checkSpecialCharacters,
  setNicknameDuplicate,
  profileImage,
  handleImageChange,
}) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-[335px] h-full flex-col justify-start items-center gap-[30px] inline-flex">
      <div
        className="w-20 h-20 relative cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <Image
          src={profileImage || 'https://via.placeholder.com/80x80'}
          alt="프로필 이미지"
          width={20}
          height={20}
          className="left-0 top-0 absolute rounded-[100px] object-cover"
        />
        <div className="p-[3px] left-[56px] top-[56px] absolute bg-[#dadde1] rounded-[75px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M14.25 6.75L11.25 3.75M1.5 16.5L4.875 15.75L14.7 5.925C15.0833 5.54167 15.0833 4.95833 14.7 4.575L13.425 3.3C13.0417 2.91667 12.4583 2.91667 12.075 3.3L2.25 13.125L1.5 16.5Z"
              stroke="#808080"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2.5">
          <label className="px-2.5 text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
            닉네임
          </label>
          <div className="flex items-center gap-2">
            <input
              value={name}
              maxLength={8}
              onChange={(e) => {
                setName(e.target.value);
                checkAllConditions(e.target.value);
                setNicknameDuplicate(true);
              }}
              placeholder="이름을 입력해주세요"
              className={`w-[247px] h-[51px] p-[15px] bg-white rounded-[10px] border ${
                nameError ? 'border-[#e0302d]' : 'border-[#e9e9e9]'
              } placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']`}
            />

            {nicknameDuplicate ? (
              <div>
                {nameError && (
                  <div className="w-[80px] h-[51px] px-3 py-2.5 bg-[#c3c3c3] rounded-[10px] text-white text-base font-medium flex items-center">
                    중복확인
                  </div>
                )}
                {!nameError && (
                  <button
                    onClick={checkDuplicateName}
                    className="w-[80px] h-[51px] px-3 py-2.5 bg-[#007aff] rounded-[10px] text-white text-base font-medium flex items-center"
                  >
                    중복확인
                  </button>
                )}
              </div>
            ) : (
              <div className="min-w-[80px] h-[51px] px-[10px] py-2.5 bg-[#d4e8ff] rounded-[10px] border border-[#007aff]/20 text-[#007aff] text-base font-medium flex items-center">
                사용가능
              </div>
            )}
          </div>

          {name && (
            <div className="flex flex-wrap gap-x-11 gap-y-2 mt-2">
              <ValidationIcon
                isValid={checkCharacterLimit(name)}
                text="한글 8자 이내"
              />
              <ValidationIcon
                isValid={!checkSpecialCharacters(name)}
                text="특수문자 금지"
              />
              <ValidationIcon
                isValid={checkSpacing(name)}
                text="띄어쓰기 금지"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="px-2.5 text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
            학교
          </label>
          <div className="flex items-center">
            <input
              disabled
              placeholder="ㅇㅇ대학교"
              className="mr-[8px] w-[247px] max-h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']"
            />
            <button
              onClick={() => router.push(`/universities?which=edit`)}
              className="w-full h-[51px] py-2.5 bg-[#007aff] rounded-[10px] text-white text-base font-semibold"
            >
              학교검색
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DriverProfile: React.FC<{
  profileImage: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ profileImage, handleImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-[335px] h-[272px] flex-col justify-start items-center gap-[30px] inline-flex">
      <div
        className="w-20 h-20 relative cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <Image
          src={profileImage || 'https://via.placeholder.com/80x80'}
          alt="프로필 이미지"
          width={20}
          height={20}
          className="left-0 top-0 absolute rounded-[100px] object-cover"
        />
        <div className="p-[3px] left-[56px] top-[56px] absolute bg-[#dadde1] rounded-[75px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M14.25 6.75L11.25 3.75M1.5 16.5L4.875 15.75L14.7 5.925C15.0833 5.54167 15.0833 4.95833 14.7 4.575L13.425 3.3C13.0417 2.91667 12.4583 2.91667 12.075 3.3L2.25 13.125L1.5 16.5Z"
              stroke="#808080"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />

        <div className="p-[3px] absolute left-[56px] top-[56px] bg-[#dadde1] rounded-[75px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M14.25 6.75L11.25 3.75M1.5 16.5L4.875 15.75L14.7 5.925C15.0833 5.54167 15.0833 4.95833 14.7 4.575L13.425 3.3C13.0417 2.91667 12.4583 2.91667 12.075 3.3L2.25 13.125L1.5 16.5Z"
              stroke="#808080"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <label className="px-2.5 text-[#4f4f4f] text-sm font-medium">
            차량 번호
          </label>

          <input
            placeholder="12가3456"
            className="w-[335px] h-[51px] p-[15px] bg-[#f7f7f7] rounded-[10px] border border-[#dadada] text-[#3c3c3c] text-base font-medium leading-[14px]"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="px-2.5 text-[#4f4f4f] text-sm font-medium">
            전화번호
          </label>
          <input
            placeholder="010-1234-5678"
            className="w-[335px] h-[51px] p-[15px] bg-[#f7f7f7] rounded-[10px] border border-[#dadada] text-[#3c3c3c] text-base font-medium leading-[14px]"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const which = searchParams.get('which');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nicknameDuplicate, setNicknameDuplicate] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [profileImage, setProfileImage] = useState('');

  function checkAllConditions(text: string) {
    if (
      checkSpacing(text) &&
      checkCharacterLimit(text) &&
      !checkSpecialCharacters(text)
    ) {
      setNameError(false);
    } else setNameError(true);
  }

  const checkDuplicateName = async () => {
    setModal(true);
    setModalMsg('사용 가능한 닉네임입니다.');
    setNicknameDuplicate(false);
  };

  function checkSpacing(text: string): boolean {
    return !text.includes(' ');
  }

  function checkCharacterLimit(text: string): boolean {
    const koreanOnly = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{1,8}$/;
    return koreanOnly.test(text);
  }

  function checkSpecialCharacters(text: string): boolean {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharRegex.test(text);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clickHandler = () => {
    console.log('끝');
  };

  return (
    <div className="relative w-full px-[20px] pt-[140px]">
      <div className="flex">
        <button
          onClick={() => router.back()}
          className="absolute left-[20px] top-[57.5px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
          >
            <path
              d="M10 1.10938L1.82023 7.92585C1.39337 8.28157 1.39337 8.93718 1.82023 9.2929L10 16.1094"
              stroke="#505050"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <h1 className="absolute left-[141.5px] top-[52.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
          {which === '패신저' ? '프로필' : '차량 정보'}
        </h1>

        {which === '패신저' ? (
          <PassengerProfile
            name={name}
            nameError={nameError}
            nicknameDuplicate={nicknameDuplicate}
            setName={setName}
            checkAllConditions={checkAllConditions}
            checkDuplicateName={checkDuplicateName}
            checkSpacing={checkSpacing}
            checkCharacterLimit={checkCharacterLimit}
            checkSpecialCharacters={checkSpecialCharacters}
            setNicknameDuplicate={setNicknameDuplicate}
            profileImage={profileImage}
            handleImageChange={handleImageChange}
          />
        ) : (
          <DriverProfile
            profileImage={profileImage}
            handleImageChange={handleImageChange}
          />
        )}
      </div>

      <button
        onClick={clickHandler}
        className={`w-[335px] h-[51px] px-[30px] py-[15px] ${
          name && !nicknameDuplicate ? 'bg-[#007aff]' : 'bg-[#dadde1]'
        } rounded-xl justify-center items-center gap-2.5 inline-flex ${
          which === '패신저' ? 'mt-[300px]' : 'mt-[322px]'
        }`}
      >
        <span className="text-white text-lg font-semibold font-['Pretendard']">
          수정하기
        </span>
      </button>

      {modal && <Modal message={modalMsg} onClose={() => setModal(false)} />}
    </div>
  );
};

const EditProfilePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileContent />
    </Suspense>
  );
};

export default EditProfilePage;
