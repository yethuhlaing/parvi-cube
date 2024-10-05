import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import logo from '../public/favicon.ico'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Parvi Cube",
  description: "A Parvi Cube Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo.src} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-gray-50 text-opacity-90 no-s no-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
