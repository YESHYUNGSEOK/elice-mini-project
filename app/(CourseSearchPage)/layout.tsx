import type { Metadata } from "next";
import "@/app/reset.css";
import "@/app/globals.css";
import "@/app/(CourseSearchPage)/layout.css";

export const metadata: Metadata = {
  title: "엘카데미 | AI시대 생존을 위한 첫 사수!",
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
