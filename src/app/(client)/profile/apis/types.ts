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
