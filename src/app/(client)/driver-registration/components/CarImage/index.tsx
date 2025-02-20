'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

import { DriverRegistrationFormValues } from '@/app/(client)/driver-registration/components/Form/schema';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import { CarImageProps } from '@/app/(client)/driver-registration/components/CarImage/types';

const CarImage = ({ onNext }: CarImageProps) => {
  const { watch, setValue } = useFormContext<DriverRegistrationFormValues>();

  const carImage = watch('carImage');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setValue('carImage', file);
    }
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
                src={URL.createObjectURL(carImage)}
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
