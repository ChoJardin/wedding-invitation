import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const eulyoo = localFont({
  src: [
    {
      path: './fonts/Eulyoo1945-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Eulyoo1945-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-eulyoo', // CSS 변수로 등록 가능
});

export const metadata: Metadata = {
  title: '민상 & 정원 결혼합니다',
  description: '민상이와 정원이의 결혼식에 초대합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={eulyoo.variable}>
      <body>{children}</body>
    </html>
  );
}
