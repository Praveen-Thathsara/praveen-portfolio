import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "../data/portfolio";

export const metadata: Metadata = {
  title: `${portfolio.name} | Software Developer`,
  description: `${portfolio.name} is a Computer Science undergraduate at Sabaragamuwa University of Sri Lanka, focused on software engineering, cloud and DevOps.`,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
