/**
 * 인증 토큰 관리를 위한 유틸리티 함수
 */

const TOKEN_KEY = 'auth_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
/**
 * 브라우저 환경인지 확인합니다.
 * @returns 브라우저 환경 여부
 */
const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * 인증 토큰을 로컬 스토리지에 저장합니다.
 * @param token 저장할 인증 토큰
 */
export const saveAuthToken = (token: string): void => {
  if (isBrowser()) {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
      console.error('토큰 저장 중 오류 발생:', error);
    }
  }
};

/**
 * 로컬 스토리지에서 인증 토큰을 가져옵니다.
 * @returns 저장된 인증 토큰 또는 null
 */
export const getAuthToken = (): string | null => {
  if (isBrowser()) {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch (error) {
      console.error('토큰 조회 중 오류 발생:', error);
      return null;
    }
  }
  return null;
};

/**
 * 로컬 스토리지에서 인증 토큰을 제거합니다.
 */
export const removeAuthToken = (): void => {
  if (isBrowser()) {
    try {
      localStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      console.error('토큰 제거 중 오류 발생:', error);
    }
  }
};

/**
 * 인증 토큰이 존재하는지 확인합니다.
 * @returns 토큰 존재 여부
 */
export const hasAuthToken = (): boolean => {
  return !!getAuthToken();
};

/**
 * 인증 헤더를 생성합니다.
 * @returns Authorization 헤더 객체
 */
export const getAuthHeader = (): Record<string, string> => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

/**
 * 인증 토큰을 로컬 스토리지에 저장합니다.
 * @param token 저장할 인증 토큰
 */
export const saveRefreshToken = (token: string): void => {
  if (isBrowser()) {
    try {
      localStorage.setItem(REFRESH_TOKEN_KEY, token);
    } catch (error) {
      console.error('토큰 저장 중 오류 발생:', error);
    }
  }
};

/**
 * 로컬 스토리지에서 인증 토큰을 가져옵니다.
 * @returns 저장된 인증 토큰 또는 null
 */
export const getRefreshToken = (): string | null => {
  if (isBrowser()) {
    try {
      return localStorage.getItem(REFRESH_TOKEN_KEY);
    } catch (error) {
      console.error('토큰 조회 중 오류 발생:', error);
      return null;
    }
  }
  return null;
};

/**
 * 로컬 스토리지에서 인증 토큰을 제거합니다.
 */
export const removeRefreshToken = (): void => {
  if (isBrowser()) {
    try {
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    } catch (error) {
      console.error('토큰 제거 중 오류 발생:', error);
    }
  }
};

/**
 * 인증 토큰이 존재하는지 확인합니다.
 * @returns 토큰 존재 여부
 */
export const hasRefreshToken = (): boolean => {
  return !!getRefreshToken();
};

/**
 * 인증 헤더를 생성합니다.
 * @returns Authorization 헤더 객체
 */
export const getRefreshHeader = (): Record<string, string> => {
  const token = getRefreshToken();
  return token ? { Refreshtoken: `Bearer ${token}` } : {};
};
