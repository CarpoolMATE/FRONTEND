'use client';

import { useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';

import Button from '@/components/Button';

import { CropModalProps } from '@/components/Image/Upload/types';

const CropModal = ({ imageUrl, onCrop, onClose }: CropModalProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const createCroppedImage = async (
    imageUrl: string,
    pixelCrop: { x: number; y: number; width: number; height: number },
  ): Promise<File> => {
    const image = document.createElement('img');
    image.src = imageUrl;

    await new Promise((resolve) => {
      image.onload = resolve;
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Canvas context is not available');
    }

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error('Canvas is empty');
        }
        const file = new File([blob], 'cropped-image.jpg', {
          type: 'image/jpeg',
        });
        resolve(file);
      }, 'image/jpeg');
    });
  };

  const handleCrop = async () => {
    try {
      if (croppedAreaPixels) {
        const croppedImage = await createCroppedImage(
          imageUrl,
          croppedAreaPixels,
        );
        onCrop(croppedImage);
        onClose();
      }
    } catch (error) {
      console.error('Error creating cropped image: ', error);
    }
  };

  const cropperContent = (
    <div className="w-full h-full flex flex-col">
      <div className="relative h-80 w-full">
        <Cropper
          image={imageUrl}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          cropShape="round"
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" onClick={onClose} intent="outline">
          취소
        </Button>
        <Button type="button" onClick={handleCrop}>
          확인
        </Button>
      </div>
    </div>
  );

  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-40 bg-[#0000005b] w-full h-full">
      <div className="rounded-lg min-w-[310px] bg-white flex items-center justify-center flex-col gap-3 p-3 w-[90%] max-w-md">
        {cropperContent}
      </div>
    </div>
  );
};

export default CropModal;
