export type PostSignInParams = {
  memberId: string;
  password: string;
};

export type SignInDto = {
  memberId: string;
  nickname: string;
  email: string;
  university: string;
  profileImage: string;
  memberType: 'STANDARD' | 'ADMIN';
  providerType: 'MATE' | 'GOOGLE' | 'KAKAO' | 'LINE' | 'NAVER';
  createDate: string;
  updateDate: string;
  reservation: boolean;
  isBanned: boolean;
  isDriver: boolean;
  carpoolCount: number;
};
