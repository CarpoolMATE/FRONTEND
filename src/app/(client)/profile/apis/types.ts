export type GetProfileListType = 'history' | 'driveHis';

export type PutProfileEditParams = {
  nickname: string;
  profileImage: string;
};

export type ProfileEditDto = {
  message: string;
  status: string;
  data: PutProfileEditParams;
};

export type PutDriverProfileEditParams = {
  carNumber: string;
  phoneNumber: string;
  carImage: string;
};

export type DriverProfileEditDto = {
  message: string;
  status: string;
  data: PutDriverProfileEditParams;
};
