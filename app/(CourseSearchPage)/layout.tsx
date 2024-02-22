import type { Metadata } from "next";
import "@/app/reset.css";
import "@/app/globals.css";
import "@/app/(CourseSearchPage)/layout.css";

export const metadata: Metadata = {
  title: "엘리스 미니 프로젝트 | 노형석",
  description: "엘카데미에서 제공하는 강좌들을 검색해보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
