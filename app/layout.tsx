import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praveen Thathsara | Software Developer",
  description: "Portfolio of Praveen Thathsara, a Computer Science undergraduate focused on software engineering, cloud and DevOps.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}