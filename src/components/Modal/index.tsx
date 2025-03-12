'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from '@/components/Button';

import { useModalStore } from '@/store/modal';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  message: React.ReactNode;
  title?: string;
  closeText?: string;
  confirmText?: string;
};

const Modal = ({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
  closeText = '확인',
  confirmText = '네 취소할래요',
}: ModalProps) => {
  const focusRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      focusRef.current = document.activeElement as HTMLInputElement;
    } else if (focusRef.current) {
      focusRef.current.focus(); // 기존 포커스 복원
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal fixed inset-0 flex items-center justify-center z-40 bg-[#0000005b] w-full h-full">
      <div className="rounded-lg min-w-[310px] bg-white flex items-center justify-center flex-col gap-3 p-3 h-min my-auto">
        {title && <h1 className="font-semibold">{title}</h1>}
        <div className="text-sm">{message}</div>
        <div className="w-full mt-2 flex gap-2">
          <Button
            onClick={onClose}
            className="text-sm h-10"
            intent={onConfirm ? 'outline' : 'default'}
          >
            {closeText}
          </Button>
          {onConfirm && (
            <Button
              onClick={onConfirm}
              className="text-sm h-10"
              intent="delete"
            >
              {confirmText}
            </Button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

// 전역 모달 컴포넌트
export const GlobalModal = () => {
  const { modal, closeModal } = useModalStore();

  if (!modal) return null;

  return (
    <Modal
      isOpen={modal.isOpen}
      title={modal.title}
      message={modal.message}
      closeText={modal.closeText || '확인'}
      confirmText={modal.confirmText}
      onClose={closeModal}
      onConfirm={
        modal.onConfirm
          ? () => {
              modal.onConfirm?.();
              closeModal();
            }
          : undefined
      }
    />
  );
};

export default Modal;
