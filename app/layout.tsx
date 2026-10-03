import type { Metadata } from "next";
import { PageBackground } from "@/components/layout/page-background";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "On Time Media | Creative Production Studio",
  description:
    "On Time Media creates campaign visuals, digital experiences, and social-first content that help brands stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <div className="site-shell">
          <PageBackground />
          <div className="site-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
