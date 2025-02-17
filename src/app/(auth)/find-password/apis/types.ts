export type PostFindPasswordParams = {
  memberId: string;
  email: string;
};

export type FindPasswordDto = {
  message: string;
  status: string;
  data: boolean;
};
