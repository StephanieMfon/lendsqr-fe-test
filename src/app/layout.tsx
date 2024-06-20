import type { Metadata } from "next";
import { Roboto, Work_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
  display: "swap",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work_sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lendsqr App",
  description: "Welcome to lendsqr app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${work_sans.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
