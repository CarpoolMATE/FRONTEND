import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Carple",
  description: "Carple university",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} w-full h-screen flex justify-center items-center bg-black`}
      >
        <div className="w-[375px] h-[812px] flex justify-center bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
