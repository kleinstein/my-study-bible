import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Word Association - 연관 단어 학습",
  description: "영어 단어와 연관된 단어들을 시각적으로 학습하는 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
