export async function getCookieHeader() {
  // 서버 환경에서만 작동
  // 빌드시 static pages 에서 호출 되면 오류 발생해 try catch 처리
  try {
    if (typeof window === 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { headers } = require('next/headers'); // 서버에서만 require

      // 해더에서 쿠키 string을 그대로 가져와서 전달해야함
      const headersList = await headers();

      return headersList.get('Cookie');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return undefined;
  }

  return undefined;
}
