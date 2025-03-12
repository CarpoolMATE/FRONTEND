import {
  ApiErrorResponse,
  FetchParamObject,
  FetchResourceType,
} from '@/apis/types';

import { CLIENT_APP_ROUTES } from '@/constants/routes';
import { ApiErrorCode } from '@/apis/constants';

import {
  getAuthHeader,
  getRefreshHeader,
  hasRefreshToken,
  removeAuthToken,
  removeRefreshToken,
  saveAuthToken,
  saveRefreshToken,
} from '@/utils/auth';

export enum FetchMethodType {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

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
  const params = isFetchMethodGet && data && objectToQueryString(data);

  const requestUrl = !params
    ? url
    : `${url}${url.includes('?') ? '&' : '?'}${params}`;

  const baseHeaders = {
    Accept: 'application/json',
    ...getAuthHeader(),
    ...(!isFetchMethodGet &&
      data &&
      !(data instanceof FormData) && { 'Content-Type': 'application/json' }),
  };

  const baseOptions: RequestInit = {
    method,
    mode: 'cors',
    credentials: 'include',
    cache: 'no-cache',
    headers: baseHeaders,
  };

  const requestOptions: RequestInit = {
    ...baseOptions,
    ...(options && options),
  };

  if (!isFetchMethodGet && data) {
    requestOptions.body =
      data instanceof FormData ? data : JSON.stringify(data);
  } else {
    requestOptions.body = null;
  }

  // FIXME: cors 적용 시 apache 이용
  const response = await fetch(requestUrl, requestOptions);

  // Authorization 헤더 확인 및 저장
  const authToken = response.headers.get('Authorization');
  const refreshToken = response.headers.get('RefreshToken');

  if (authToken) {
    const token = authToken.startsWith('Bearer ')
      ? authToken.substring(7)
      : authToken;
    saveAuthToken(token);
  }

  if (refreshToken) {
    const token = refreshToken.startsWith('Bearer ')
      ? refreshToken.substring(7)
      : refreshToken;
    saveRefreshToken(token);
  }

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case ApiErrorCode.Unauthorized: {
      if (hasRefreshToken()) {
        const refreshResponse = await fetch(requestUrl, {
          ...requestOptions,
          headers: {
            ...baseHeaders,
            ...getRefreshHeader(),
          },
        });

        if (!refreshResponse.ok) {
          removeAuthToken();
          removeRefreshToken();
          window.location.href = CLIENT_APP_ROUTES.SIGNIN;
        }

        const token = refreshResponse.headers.get('Authorization');
        const refreshToken = refreshResponse.headers.get('RefreshToken');

        if (token) {
          saveAuthToken(token);
        }
        if (refreshToken) {
          saveRefreshToken(refreshToken);
        }

        return refreshResponse.json();
      }

      removeAuthToken();
      removeRefreshToken();
      window.location.href = CLIENT_APP_ROUTES.SIGNIN;
      break;
    }

    case ApiErrorCode.RefreshTokenExpired: {
      removeAuthToken();
      removeRefreshToken();
      window.location.href = CLIENT_APP_ROUTES.SIGNIN;
      break;
    }

    default: {
      const errorData: ApiErrorResponse = await response.json();

      throw new Error(
        errorData.message ||
          `Network response was not ok for URL : ${requestUrl}`,
        { cause: errorData.code },
      );
    }
  }

  return {} as T;
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
