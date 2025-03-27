'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

import usePostUpload from '@/apis/usePostUpload';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Spin from '@/components/Spin';
import CropModal from '@/components/Image/Upload/CropModal';

import { IMAGE_MAX_SIZE } from '@/constants/common';

import { useModalStore } from '@/store/modal';

import { ImageUploaderProps } from '@/components/Image/Upload/types';

import { cn } from '@/utils/style';

const ImageUploader = ({
  currentImage,
  size = 150,
  onUpload,
}: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { openModal } = useModalStore();

  const { mutate: postUpload } = usePostUpload();

  const convertHeicToJpeg = async (file: File): Promise<File> => {
    try {
      const heic2any = (await import('heic2any')).default;

      const blob = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.9,
      });

      const jpegBlob = Array.isArray(blob) ? blob[0] : blob;

      return new File(
        [jpegBlob],
        file.name.replace(/\.(heic|heif)$/i, '.jpg'),
        {
          type: 'image/jpeg',
        },
      );
    } catch (error) {
      console.error('HEIC/HEIF 변환 중 오류 발생:', error);
      throw error;
    }
  };

  const processFile = async (file: File): Promise<File> => {
    if (typeof window === 'undefined') {
      return file;
    }

    if (
      /\.(heic|heif)$/i.test(file.name) ||
      file.type === 'image/heic' ||
      file.type === 'image/heif'
    ) {
      return await convertHeicToJpeg(file);
    }

    return file;
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);

      // HEIC/HEIF 파일 처리
      const processedFile = await processFile(file);

      const imageUrl = URL.createObjectURL(processedFile);
      setSelectedImage(imageUrl);
      setCropModalOpen(true);
    } catch (error) {
      console.error('파일 처리 중 오류 발생:', error);
      openModal({
        message: '이미지 처리 중 오류가 발생했습니다.',
        closeText: '확인',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleCrop = (croppedFile: File) => {
    if (croppedFile.size > IMAGE_MAX_SIZE) {
      openModal({
        message: '10MB 이하의 파일만 업로드 가능합니다.',
        closeText: '확인',
      });
      return;
    }

    if (
      !['image/jpeg', 'image/png', 'image/heic', 'image/heif'].includes(
        croppedFile.type,
      )
    ) {
      openModal({
        message: 'JPG, PNG, HEIC 또는 HEIF 파일만 업로드 가능합니다.',
        closeText: '확인',
      });
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', croppedFile);

    postUpload(formData, {
      onSuccess: (data) => {
        onUpload(data);
        setIsLoading(false);
        if (selectedImage) {
          URL.revokeObjectURL(selectedImage);
        }
      },
      onError: (error) => {
        console.error('이미지 업로드 중 오류 발생:', error);
        openModal({
          message: '이미지 업로드 중 오류가 발생했습니다.',
          closeText: '확인',
        });
        setIsLoading(false);
      },
    });
  };

  const closeCropModal = () => {
    setCropModalOpen(false);
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
      setSelectedImage(null);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {currentImage ? (
        <Button
          type="button"
          className={cn(
            'relative size-[150px] rounded-full overflow-hidden cursor-pointer bg-transparent',
            size && `size-[${size}px]`,
          )}
          onClick={handleClick}
          disabled={isLoading}
        >
          <Image
            src={currentImage}
            alt="선택된 이미지"
            className="object-cover"
            fill
          />
          {isLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Spin />
            </div>
          )}
        </Button>
      ) : (
        <Button
          type="button"
          intent="icon"
          className={cn(
            'size-[150px] p-2.5 bg-[#f1f1f1] rounded-full justify-center items-center gap-2.5 inline-flex cursor-pointer',
            size && `size-[${size}px]`,
          )}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spin />
          ) : (
            <Icon icon="PLUS" className="text-[#A1A1A1]" />
          )}
        </Button>
      )}

      {cropModalOpen &&
        selectedImage &&
        createPortal(
          <CropModal
            imageUrl={selectedImage}
            onCrop={handleCrop}
            onClose={closeCropModal}
          />,
          document.body,
        )}
    </>
  );
};

export default ImageUploader;
