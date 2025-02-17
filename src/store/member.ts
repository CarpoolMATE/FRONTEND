import { create } from 'zustand';

import { MemberDto } from '@/types/dtos/member';

export type MemberStore = {
  member: MemberDto | null;
  setMember: (member: MemberDto) => void;
};

export const useMemberStore = create<MemberStore>((set) => ({
  member: null,
  setMember: (member) => set({ member }),
}));
