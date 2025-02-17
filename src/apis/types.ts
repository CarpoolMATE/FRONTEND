export type FetchResourceType =
  | string
  | number
  | boolean
  | null
  | undefined
  | FetchResourceObject
  | FetchResourceType[];

export type FetchResourceObject = { [key: string]: FetchResourceType };

export type FetchParamObject = {
  [key: string]: string | number | boolean | null | undefined;
};

export type ApiSuccessResponse<T> = {
  message: string;
  status: string;
  data: T;
};

export type ApiErrorResponse = {
  status: number;
  name: string;
  code: string;
  message: string;
};
