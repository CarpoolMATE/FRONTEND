export type PostUploadParams = {
  file: string;
};

export type UploadDto = {
  data: string;
  message: string;
  status: string;
};

export type PutProfileEditParams = {
  nickname: string;
  profileImage: string;
};

export type ProfileEditDto = {
  message: string;
  status: string;
  data: PutProfileEditParams;
};
