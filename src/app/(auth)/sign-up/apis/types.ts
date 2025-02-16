export type PostSignUpParams = {
  memberId: string;
  email: string;
  password: string;
  nickname?: string;
  university?: string;
};

export type PostCheckDuplicateParams = {
  nickname?: string;
  memberId?: string;
  email?: string;
};

export type CheckDuplicateDto = {
  data: boolean;
  message: string;
  status: string;
};

export type CheckDuplicate = 'checkNickname' | 'checkMemberId' | 'checkEmail';
