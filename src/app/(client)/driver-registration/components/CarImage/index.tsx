'use client';

import { useFormContext } from 'react-hook-form';

import Button from '@/components/Button';
import ImageUploader from '@/components/Image/Upload';

import { DriverRegistrationFormValues } from '@/app/(client)/driver-registration/components/Form/schema';
import { CarImageProps } from '@/app/(client)/driver-registration/components/CarImage/types';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

const CarImage = ({ onNext }: CarImageProps) => {
  const { watch, setValue } = useFormContext<DriverRegistrationFormValues>();

  const imageUrl = watch('carImage');

  const handleImageUpload = (filePath: string) => {
    setValue('carImage', filePath);
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

        <div className="w-full flex justify-center items-center mt-20">
          <ImageUploader currentImage={imageUrl} onUpload={handleImageUpload} />
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button disabled={!imageUrl} onClick={onNext}>
          다음
        </Button>
      </div>
    </section>
  );
};

export default CarImage;
