export type MemberDto = {
  memberId: string;
  nickname: string;
  email: string;
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
