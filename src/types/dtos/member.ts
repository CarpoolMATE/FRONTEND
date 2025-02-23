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
  carNumber?: string;
  phoneNumber?: string;
  carImage?: string;
  driverRegistrationDate?: string;
  isDriver: boolean;
  carpoolCount: number;
};
