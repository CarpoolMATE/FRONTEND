'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';

import { useMemberStore } from '@/store/member';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import usePutDriverProfileEdit from '@/app/(client)/profile/apis/usePutDriverProfileEdit';
import usePostUpload from '@/apis/usePostUpload';

import {
  EditDriverProfileFormValues,
  editDriverProfileSchema,
} from '@/app/(client)/profile/components/schema';

import { MemberDto } from '@/types/dtos/member';

import Header from '@/app/(auth)/components/Header';
import ProfileImageCard from '@/app/(client)/profile/components/ProfileImage';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const PassengerProfileEditPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isDirty },
  } = useForm<EditDriverProfileFormValues>({
    resolver: zodResolver(editDriverProfileSchema),
  });

  const { member, setMember } = useMemberStore();
  const { mutateAsync: postUpload } = usePostUpload();
  const { mutateAsync: putDriverProfileEdit } = usePutDriverProfileEdit();

  const [errorText, setErrorText] = useState('');

  const imgFileRef = useRef<File | undefined>(undefined);

  const onChangeImage = (file: File, url: string) => {
    imgFileRef.current = file;
    setValue('carImage', url, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleEditProfile = useCallback(
    async ({ carNumber, phoneNumber }: EditDriverProfileFormValues) => {
      //TODO: 업로드 api 404발생으로 재테스트 필요.
      try {
        let carImage = watch('carImage');

        if (imgFileRef.current) {
          const formData = new FormData();
          formData.append('file', imgFileRef.current);
          const uploadUrl = await postUpload(formData);
          carImage = uploadUrl;
        }

        const driverProfileEditResponse = await putDriverProfileEdit({
          carImage,
          carNumber,
          phoneNumber,
        });

        if (driverProfileEditResponse.status === 'OK') {
          const updatedMember = {
            ...member,
            ...driverProfileEditResponse.data,
          } as MemberDto;

          setMember(updatedMember);
          reset(driverProfileEditResponse.data);
          setErrorText('수정이 완료되었습니다.');
        }
      } catch (error) {
        setErrorText(
          error instanceof Error ? error.message : '프로필 수정 중 오류 발생',
        );
      }
    },
    [
      postUpload,
      putDriverProfileEdit,
      setErrorText,
      setMember,
      member,
      reset,
      watch,
    ],
  );

  useEffect(() => {
    reset({ ...member });
  }, [member]);

  return (
    <section className="w-full flex flex-col h-screen">
      <Header />
      <Modal
        isOpen={!!errorText}
        message={errorText}
        onClose={() => setErrorText('')}
      />
      <form
        onSubmit={handleSubmit(handleEditProfile)}
        className="flex h-full flex-col justify-between p-4 w-full"
      >
        <div className="w-full flex flex-col items-center gap-[30px]">
          <ProfileImageCard
            onChangeImage={onChangeImage}
            src={watch('carImage')}
            isEdit
          />
          <div className="w-full flex flex-col gap-2">
            <span className="text-sm">차량 번호</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input
                {...register('carNumber')}
                placeholder="차량 번호를 입력해주세요"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-sm">전화 번호</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input
                {...register('phoneNumber')}
                placeholder="전화 번호를 입력해주세요"
              />
            </div>
          </div>
          <div className="w-full flex items-start">
            <Link
              href={CLIENT_APP_ROUTES.VERIFY_PASSWORD}
              className="text-placeholder cursor-pointer"
            >
              비밀번호 변경
            </Link>
          </div>
        </div>
        <Button disabled={!isDirty}>수정하기</Button>
      </form>
    </section>
  );
};

export default PassengerProfileEditPage;
