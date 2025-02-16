import { getCookieHeader } from '@/apis/cookie';
import {
  ApiErrorResponse,
  FetchParamObject,
  FetchResourceType,
} from '@/apis/types';

export enum FetchMethodType {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

const isClient = (): boolean => {
  return typeof window !== 'undefined';
};

export const getContentType = (data: FetchResourceType | FetchParamObject) => {
  let contentType = '';

  switch (typeof data) {
    case 'string':
      contentType = 'application/x-www-form-urlencoded';
      break;

    default:
      contentType = 'application/json';
      break;
  }

  return contentType;
};

const objectToQueryString = (obj: object, prefix: string = ''): string => {
  return Object.entries(obj)
    .flatMap(([key, value]) => {
      // ASP.NET 모델 바인딩과 호환되도록 fullkey 생성 (예: pageM.pageIndex=1&pageM.pageSize=10&pageM.sort=1)
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return objectToQueryString(value, fullKey);
      }

      // 기본 키-값 쌍 처리
      return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');
};

export async function fetchAPI<T, R = FetchResourceType | FetchParamObject>(
  url: string,
  method: FetchMethodType,
  data?: R,
  options?: RequestInit,
): Promise<T> {
  const isFetchMethodGet = method === FetchMethodType.Get;
  const isServer: boolean = !isClient();
  const params = isFetchMethodGet && data && objectToQueryString(data);

  const requestUrl = !params
    ? url
    : `${url}${url.includes('?') ? '&' : '?'}${params}`;

  const baseOptions: RequestInit = {
    method,
    mode: 'cors',
    credentials: 'include',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      ...(!isFetchMethodGet && data && { 'Content-Type': 'application/json' }),
    },
  };

  // [중요] 빌드시 static pages 에서 쿠키 요청하면 오류 발생함 getCookieHeader try catch 처리
  const cookie = isServer && (await getCookieHeader());
  const serverOptions: RequestInit = isServer && {
    ...(cookie && { headers: { Cookie: cookie } }),
  };

  const requestOptions: RequestInit = {
    ...baseOptions,
    ...(options && options),
    ...(serverOptions && serverOptions),
  };
  requestOptions.body = !isFetchMethodGet && data ? JSON.stringify(data) : null;

  // FIXME: cors 적용 시 apache 이용
  const response = await fetch(requestUrl, requestOptions);

  if (!response.ok) {
    const errorData: ApiErrorResponse = await response.json();

    throw new Error(
      errorData.message ||
        `Network response was not ok for URL : ${requestUrl}`,
      { cause: errorData.code },
    );
  }

  return response.json();
}

export async function fetchGet<T, R = FetchResourceType | FetchParamObject>(
  url: string,
  params?: R,
  options?: RequestInit,
): Promise<T> {
  const response = await fetchAPI<T, R>(
    url,
    FetchMethodType.Get,
    params,
    options,
  );

  return response;
}

export async function fetchPost<T, R = FetchResourceType | FetchParamObject>(
  url: string,
  resource?: R,
  options?: RequestInit,
): Promise<T> {
  const response = await fetchAPI<T, R>(
    url,
    FetchMethodType.Post,
    resource,
    options,
  );

  return response;
}

export async function fetchPut<T, R = FetchResourceType | FetchParamObject>(
  url: string,
  resource?: R,
  options?: RequestInit,
): Promise<T> {
  const response = await fetchAPI<T, R>(
    url,
    FetchMethodType.Put,
    resource,
    options,
  );

  return response;
}

export async function fetchPatch<T, R = FetchResourceType | FetchParamObject>(
  url: string,
  resource?: R,
  options?: RequestInit,
): Promise<T> {
  const response = await fetchAPI<T, R>(
    url,
    FetchMethodType.Patch,
    resource,
    options,
  );

  return response;
}

export async function fetchDelete<T, R = FetchResourceType | FetchParamObject>(
  url: string,
  resource?: R,
  options?: RequestInit,
): Promise<T> {
  const response = await fetchAPI<T, R>(
    url,
    FetchMethodType.Delete,
    resource,
    options,
  );

  return response;
}
