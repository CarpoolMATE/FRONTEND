import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import LineProvider from 'next-auth/providers/line';

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_SECRET_ID || '',
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID || '',
      clientSecret: process.env.LINE_SECRET_ID || '',
    }),
  ],
});

export { handler as GET, handler as POST };
