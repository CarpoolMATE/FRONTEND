'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

import usePostUpload from '@/apis/usePostUpload';

import { DriverRegistrationFormValues } from '@/app/(client)/driver-registration/components/Form/schema';
import { CarImageProps } from '@/app/(client)/driver-registration/components/CarImage/types';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';
import { IMAGE_MAX_SIZE } from '@/constants/common';

import { useModalStore } from '@/store/modal';

const CarImage = ({ onNext }: CarImageProps) => {
  const { watch, setValue } = useFormContext<DriverRegistrationFormValues>();

  const carImage = watch('carImage');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: postUpload } = usePostUpload();
  const { openModal } = useModalStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.size > IMAGE_MAX_SIZE) {
      openModal({
        message: '10MB 이하의 파일만 업로드 가능합니다.',
        closeText: '확인',
      });
      return;
    }

    if (
      !['image/jpeg', 'image/png', 'image/heic', 'image/heif'].includes(
        file.type,
      )
    ) {
      openModal({
        message: 'JPG, PNG, HEIC 또는 HEIF 파일만 업로드 가능합니다.',
        closeText: '확인',
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    postUpload(formData, {
      onSuccess: (data) => {
        setValue('carImage', data);
      },
    });
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      <div className="px-5">
        <h1 className="text-2xl font-bold pt-12">
          카풀에 이용할
          <br />
          자동차 사진을 올려주세요
        </h1>
        <p className="pt-6 text-sm">차량 번호가 보이게 촬영해 주세요.</p>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageUpload}
        />

        <div className="w-full flex justify-center items-center mt-20">
          {carImage ? (
            <Button
              className="relative size-[150px] rounded-full overflow-hidden cursor-pointer bg-transparent"
              onClick={handleImageClick}
            >
              <Image
                src={carImage}
                alt="Selected car"
                className="object-cover"
                fill
              />
            </Button>
          ) : (
            <Button
              intent="icon"
              className="size-[150px] p-2.5 bg-[#f1f1f1] rounded-full justify-center items-center gap-2.5 inline-flex cursor-pointer"
              onClick={handleImageClick}
            >
              <Icon icon="PLUS" className="text-[#A1A1A1]" />
            </Button>
          )}
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button disabled={!carImage} onClick={onNext}>
          다음
        </Button>
      </div>
    </section>
  );
};

export default CarImage;
