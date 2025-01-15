import { axiosInstance } from "./axios";

export interface ParamType {
  memberId: string;
  email: string;
  password: string;
  nickname: string;
  university: string;
}

export const signupAPI = async (param: ParamType) => {
  await axiosInstance.post("/member/signUp", param);
};
