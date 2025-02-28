'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';

import { useMemberStore } from '@/store/member';

import { CLIENT_APP_ROUTES } from '@/constants/routes';

import usePostCheckDuplicate from '@/app/(auth)/sign-up/apis/usePostCheckDuplicate';
import usePostUpload from '@/apis/usePostUpload';

import {
  EditProfileFormValues,
  editProfileSchema,
} from '@/app/(client)/profile/components/schema';

import usePutProfileEdit from '@/app/(client)/profile/apis/usePutProfileEdit';

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
    formState: { dirtyFields },
  } = useForm<EditProfileFormValues>({
    resolver: zodResolver(editProfileSchema),
  });

  const { member, setMember } = useMemberStore();
  const { mutateAsync: postCheckDuplicateAPI } = usePostCheckDuplicate();
  const { mutateAsync: postUpload } = usePostUpload();
  const { mutateAsync: putProfileEdit } = usePutProfileEdit();

  const [errorText, setErrorText] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  const imgFileRef = useRef<File | undefined>(undefined);

  const onChangeImage = (file: File, url: string) => {
    imgFileRef.current = file;
    setValue('profileImage', url, { shouldValidate: true, shouldDirty: true });
  };

  const onDuplicateHandle = async () => {
    try {
      const response = await postCheckDuplicateAPI({
        params: { nickname: watch('nickname') },
        type: 'checkNickname',
      });

      if (response.data) {
        setErrorText('사용 가능한 닉네임입니다.');
        setDisableButton(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorText(error.message);
      }
    }
  };

  const handleEditProfile = useCallback(
    async ({ nickname }: EditProfileFormValues) => {
      try {
        let profileImage = watch('profileImage');

        if (imgFileRef.current) {
          const formData = new FormData();
          formData.append('file', imgFileRef.current);
          const uploadUrl = await postUpload(formData);
          profileImage = uploadUrl;
        }

        const profileEditResponse = await putProfileEdit({
          nickname,
          profileImage,
        });

        if (profileEditResponse.status === 'OK') {
          const updatedMember = {
            ...member,
            ...profileEditResponse.data,
          } as MemberDto;

          setMember(updatedMember);
          reset(profileEditResponse.data);
          setErrorText('수정이 완료되었습니다.');
          setDisableButton(false);
        }
      } catch (error) {
        setErrorText(
          error instanceof Error ? error.message : '프로필 수정 중 오류 발생',
        );
      }
    },
    [postUpload, putProfileEdit, setErrorText, setMember, member, reset, watch],
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
            src={watch('profileImage')}
            isEdit
          />
          <div className="w-full flex flex-col gap-2">
            <span className="text-sm">닉네임</span>
            <div className="flex gap-2 w-full [&>*]:w-full">
              <Input
                placeholder="닉네임을 입력해주세요."
                {...register('nickname')}
                onChange={(event) => {
                  setDisableButton(false);
                  register('nickname').onChange(event);
                }}
              />
              <Button
                onClick={() => !disableButton && onDuplicateHandle()}
                type="button"
                className="max-w-20"
                disabled={!dirtyFields.nickname}
                intent={disableButton ? 'success' : 'default'}
              >
                중복확인
              </Button>
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
        <Button disabled={!disableButton && !dirtyFields.profileImage}>
          수정하기
        </Button>
      </form>
    </section>
  );
};

export default PassengerProfileEditPage;
