'use client';

import Link from 'next/link';

import Icon from '@/components/Icon';
import Button from '@/components/Button';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import { DriverRegistrationModalProps } from '@/app/(client)/home/components/Modal/DriverRegistrationModal/types';

const DriverRegistrationModal = ({ onClose }: DriverRegistrationModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
      <div className="w-[335px] h-[397.32px] px-5 pt-10 pb-[25px] bg-white rounded-[20px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.06)] border-2 border-[#eaeaea]/50 flex-col justify-start items-center gap-[30px] inline-flex overflow-hidden">
        <div className="flex-col max-h-[243px] justify-start items-center gap-[35px] flex">
          <div className="text-center">
            <span className="text-xl font-semibold leading-[31px]">
              드라이버 활동을 위해서는
              <br />
            </span>
            <span className="text-primary text-xl font-semibold leading-[31px]">
              차량 등록
            </span>
            <span className="text-xl font-semibold leading-[31px]">
              이 필요합니다
            </span>
          </div>

          <div>
            <Icon
              icon="CAR"
              className="text-primary opacity-30 w-[133px] h-[75px]"
            />
          </div>

          <div className="flex-col justify-center items-center flex">
            <div>
              <span className="text-primary text-base font-medium leading-snug">
                차량 등록
              </span>
              <span className="text-icon text-base font-medium leading-snug">
                을 하시겠어요?
              </span>
            </div>
            <p className="text-icon text-base font-medium leading-snug">
              등록 후에도 패신저 활동이 가능해요
            </p>
          </div>
        </div>

        <div className="w-full justify-center items-start gap-2.5 inline-flex">
          <Button className="flex-1 bg-[#dadde1]" onClick={onClose}>
            <span className="text-[#a2abb4] text-lg font-semibold">나중에</span>
          </Button>
          <Link href={CLIENT_APP_ROUTES.DRIVER_REGISTRATION} className="flex-1">
            <Button>차량 등록</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DriverRegistrationModal;
