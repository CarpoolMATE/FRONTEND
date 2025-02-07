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

  const requestOptions: RequestInit = {
    ...baseOptions,
    ...(options && options),
  };
  requestOptions.body = !isFetchMethodGet && data ? JSON.stringify(data) : null;

  // FIXME: cors 적용 시 appche 이용, NEXT_PUBLIC_API_URL 제거
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${requestUrl}`,
    requestOptions,
  );

  if (!response.ok) {
    throw new Error(`Network response was not ok for URL : ${requestUrl}`);
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
