import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '직장인 해우소, 비움(Bium)',
  description: '직장 생활의 스트레스, 참지 말고 비워내세요. 오직 직장인들만을 위한 따뜻한 익명 소통 공간입니다.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
