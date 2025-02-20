'use client';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import { cn } from '@/utils/style';

const Done = () => {
  return (
    <section
      className={cn(
        'flex flex-col',
        `h-[calc(100vh-${DRIVER_REGISTRATION_HEADER_HEIGHT}px)]`,
      )}
    >
      <div className="px-5">
        <h1 className="text-2xl font-bold pt-12">
          드라이버 정보를
          <br />
          성공적으로 등록했어요!
        </h1>

        <div className="w-full flex justify-center items-center mt-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="215"
            height="186"
            viewBox="0 0 215 186"
            fill="none"
          >
            <g id="Group 1597881091">
              <g id="Group" opacity="0.5">
                <path
                  id="Vector"
                  d="M32.3409 162.025H14.4656C9.10302 162.025 5.52795 158.45 5.52795 153.087V126.274C5.52795 118.231 11.7843 111.08 18.9344 109.293C35.0222 104.824 59.1539 99.4614 59.1539 99.4614C59.1539 99.4614 70.7729 86.9487 78.8168 78.9048C83.2856 75.3297 88.6482 72.6484 94.9046 72.6484H157.468C162.831 72.6484 167.3 76.2235 169.981 80.6923L182.494 106.612C183.677 110.064 184.281 113.688 184.281 117.337V153.087C184.281 158.45 180.706 162.025 175.344 162.025H157.468"
                  stroke="#BBD8FF"
                  strokeWidth="10.5995"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M139.597 179.907C129.725 179.907 121.722 171.904 121.722 162.032C121.722 152.159 129.725 144.156 139.597 144.156C149.47 144.156 157.473 152.159 157.473 162.032C157.473 171.904 149.47 179.907 139.597 179.907Z"
                  stroke="#BBD8FF"
                  strokeWidth="10.5995"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M121.723 162.023H68.0967"
                  stroke="#BBD8FF"
                  strokeWidth="10.5995"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_4"
                  d="M50.2184 179.907C40.3461 179.907 32.3431 171.904 32.3431 162.032C32.3431 152.159 40.3461 144.156 50.2184 144.156C60.0907 144.156 68.0938 152.159 68.0938 162.032C68.0938 171.904 60.0907 179.907 50.2184 179.907Z"
                  stroke="#BBD8FF"
                  strokeWidth="10.5995"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <path
                id="Vector_5"
                opacity="0.5"
                d="M198.996 48.4609H198.965"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_6"
                opacity="0.5"
                d="M130.273 21.0703H130.242"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_7"
                opacity="0.5"
                d="M85.4453 31.1875H85.4141"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_8"
                opacity="0.5"
                d="M58.9531 5.71875H58.9219"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_9"
                opacity="0.5"
                d="M44.0292 26.6036L50.1387 30.7334C51.8787 31.9057 53.1575 33.6458 53.7566 35.6565C54.3557 37.6672 54.2378 39.8235 53.4232 41.7569C52.4029 44.2598 53.7738 47.1362 56.4204 47.8724L57.5633 48.1903C60.1498 48.9099 61.8734 51.3335 61.6519 53.9938L61.3966 57.3575"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_10"
                opacity="0.5"
                d="M112.952 13.2336L109.195 19.5788C108.123 21.3824 107.711 23.5022 108.029 25.576C108.347 27.6498 109.375 29.5488 110.938 30.9483C112.93 32.7748 112.921 35.9611 110.843 37.7581L109.946 38.5341C107.915 40.2903 107.393 43.2182 108.73 45.5284L110.399 48.4601"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_11"
                opacity="0.5"
                d="M7.09052 54.751L9.82695 54.3959C12.6921 54.0419 15.1703 56.4255 14.9412 59.3008C14.7254 61.5023 16.1616 63.5514 18.3072 64.1074L20.6341 64.7104"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_12"
                opacity="0.5"
                d="M209.667 77.3458L208.501 79.8465C207.265 82.4554 203.924 83.2707 201.619 81.5367C199.876 80.175 197.376 80.2897 195.757 81.8035L194.001 83.4451"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_13"
                opacity="0.5"
                d="M5.52734 84.3438H5.49612"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_14"
                opacity="0.5"
                d="M172.516 32.1686L169.954 33.194C167.28 34.2833 166.28 37.5732 167.883 39.971C169.169 41.7657 168.893 44.2767 167.291 45.8091L165.554 47.471"
                stroke="#BBD8FF"
                strokeWidth="10.5995"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="mt-[72px] text-center text-[#4f4f4f] text-lg font-bold font-['Pretendard'] leading-[28.80px]">
          지금 바로 카풀을 모집해볼까요?
        </div>
        <div className="cursor-pointer mt-[85px] w-full flex gap-[8px] justify-center items-center">
          <div className="text-[#666666] text-sm font-medium font-['Pretendard']">
            아뇨, 나중에 할게요
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
          >
            <path
              id="Rectangle 882"
              d="M0.999878 0.890625L5.99988 4.89062L0.999878 8.89062"
              stroke="#666666"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-[37px]">
          <div
            onClick={() => {
              // router.push('/registerCarple');
            }}
            className="cursor-pointer w-[335px] h-[51px] px-[30px] py-[15px] bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-lg font-semibold font-['Pretendard']">
              카풀 모집하기
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Done;
