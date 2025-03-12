import React from 'react';
import { create } from 'zustand';

type ModalType = {
  isOpen: boolean;
  title?: string;
  message: React.ReactNode;
  closeText?: string;
  confirmText?: string;
  onConfirm?: () => void;
};

type ModalStore = {
  modal: ModalType | null;
  openModal: (modal: Omit<ModalType, 'isOpen'>) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modal: null,
  openModal: (modal) => set({ modal: { ...modal, isOpen: true } }),
  closeModal: () => set({ modal: null }),
}));
